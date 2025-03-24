from typing import Union

from srcapi.general.srcode import AnyCode

from api.protocol import AppDB



class User(AppDB.Model):
    password:str                = AppDB.Column(AppDB.String(100))
    name_business_he:str        = AppDB.Column(AppDB.String(20))
    name_business_en:str        = AppDB.Column(AppDB.String(20))
    email:str                   = AppDB.Column(AppDB.String(25))
    business_number:str         = AppDB.Column(AppDB.String(20))
    type_of_business:int        = AppDB.Column(AppDB.Integer, default=1) # ברירת מחדל עוסק פטור
    phone:str                   = AppDB.Column(AppDB.String(20))
    address:str                 = AppDB.Column(AppDB.String(30))
    city:str                    = AppDB.Column(AppDB.String(15))
    postal_code:int             = AppDB.Column(AppDB.Integer)
    local_phone:str             = AppDB.Column(AppDB.String(15))
    logo_filename:str           = AppDB.Column(AppDB.String(100))
    user_identify               = AppDB.Column(AppDB.String(15))
    uid:str                     = AppDB.Column(AppDB.Integer, primary_key=True)


class Invoice(AppDB.Model):
    iid:int             =AppDB.Column(AppDB.Integer, primary_key=True)



# -------------------------- MANAGER THIS TABLE --------------------------


class ManagerUsers:

    @staticmethod
    def new_user(user:"User") -> int:
        """
        require phone and ID at first time
        :param user:
        :return:
        """

        if not (user.user_identify and user.phone):
            return AnyCode.failed.code

        AppDB.session.add(user)
        AppDB.session.commit()

        return AnyCode.success.code

    @staticmethod
    def get_user_by_phone(phone:str) -> Union[int, User]:
        user = User.query.filter_by(phone=phone).first()
        if not user:
            return AnyCode.failed.code
        return user

    @staticmethod
    def get_user_by_identify(identify:str) -> Union[int, User]:
        user = User.query.filter_by(user_identify=identify).first()
        if not user:
            return AnyCode.failed.code
        return user

    @staticmethod
    def authenticate(phone:str, identify:str, pwd:str) -> int:
        user = User.query.filter_by(phone=phone, user_identify=identify, password=pwd).first()
        if not user:
            return AnyCode.failed.code
        return user

    @staticmethod
    def exits(*user_cred):
        return isinstance(ManagerUsers.authenticate(*user_cred), user_cred)

    @staticmethod
    def get_json_user(user:User):
        """
        after extract user
        """
        juser = ManagerUsers.get_as_dict(user)
        juser.pop("uid")

    @staticmethod
    def get_as_dict(user:User):
        ucopy = user.__dict__.copy()
        del ucopy['_sa_instance_state']
        return ucopy