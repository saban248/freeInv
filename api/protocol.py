import binascii
import os
from dataclasses import dataclass
from datetime import timedelta
from enum import Enum
from typing import Union

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from srcapi.general.srcode import Enum2Object, AnyCode, BaseEnumObject

# ---------------------------------------
FILE_NAME_DB = "db"
# ---------------------------------------
App = Flask("main.py", static_folder=".\\client\\build", static_url_path="")

CORS(App)

# flask sql config (connecting db to flask)
App.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{FILE_NAME_DB}.db"
App.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False  # // default
App.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=30)
App.secret_key = binascii.hexlify(os.urandom(8)).decode()
AppDB = SQLAlchemy(App)

NAME_COMPANY = "Free Invoices"

@dataclass
class JsonResponse:
    success:bool        = None
    title:str           = None
    notice:str          = None
    code:int            = None

    def as_dict(self):
        return self.__dict__


def set_json_res(msg:str, any_code:AnyCode = AnyCode.unknown, code:int = 1):
    res = JsonResponse()
    res.success = code == 0
    res.title = AnyCode.failed.value if not res.success else AnyCode.success.value
    res.notice = msg+ " " + any_code.value
    res.code = any_code.code

    return res.as_dict()


class EndPoints(Enum):
    """
    action name: <aid> {action id}
    """
    # index.html -> הדף הראשי
    AUTH        = "auth", -1
    HOME        = "home", 0
    HOME2       = "", 1
    # API
    # POST,
    DASHBOARD   = "dashboard", 2
    PROFILE     = "profile", 3
    INVOICE     = "invoice", 4
    API         = "api", 5

    @property
    def value(self):
        p, code = super().value

        return p

    @staticmethod
    def get(route: int, action:int = -1):
        for r in EndPoints:
            if r.code == route:
                return f"/{r}/{action if action != -1 else '}'}"

        return EndPoints.HOME

    @property
    def code(self):
        p, code = super().value
        return code

    @property
    def path(self):
        p, code = super().value
        return f"/{p}"

    @property
    def path_aid(self):
        p, code = super().value
        return f"/{p}/<aid>"

class ClassApi(BaseEnumObject):

    @staticmethod
    def get(cls, code) -> Union[None, "ClassApi"]:
        for item in cls:
            if item.code == code:
                return item
        return None


class _ApiInvoice(ClassApi):
    CREATE_INVOICE      = 1

    @staticmethod
    def get(code):return ClassApi.get(_ApiInvoice, code)
# >>
class _ApiGeneral(ClassApi):
    GET_USER            = 1

    @staticmethod
    def get(code):return ClassApi.get(_ApiGeneral, code)

class ApiRequest:
    invoice = _ApiInvoice
    api     = _ApiGeneral


if __name__ == "__main__":
    print(ApiRequest.invoice.get(1))