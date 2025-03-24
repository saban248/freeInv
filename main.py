from flask import request, jsonify, session
from srcapi.general.srcode import AnyCode
from srcapi.net.http.general import get_dictionary_http

from api.database.users import ManagerUsers, User
from api.protocol import App, AppDB, EndPoints, set_json_res, ApiRequest


# [json]
@App.route(EndPoints.API.path_aid, methods=["GET"])
def main_route_api(aid:str):
    return jsonify({"invoice id":aid})


@App.route(EndPoints.AUTH.path, methods=["POST"])
def authentication():
    error_input = jsonify(set_json_res(AnyCode.invalid_input.value))
    breq = get_dictionary_http(request)
    if not breq:
        return error_input

    identify_number = breq.get("id")
    phone_number    = breq.get("phone")

    if not (phone_number and identify_number):
        return error_input

    user = User()
    user.user_identify = identify_number
    user.phone =  phone_number
    db_result = ManagerUsers.new_user(user)
    if db_result:return error_input
    #SUCCESS
    session["uid"] = identify_number
    return jsonify(set_json_res(AnyCode.success.value, code=0))


# [json]
# /profile
@App.route(EndPoints.PROFILE.path_aid, methods=["POST", "GET"])
def profile(aid:str):
    error_no_user = jsonify(set_json_res(AnyCode.wsa_access_denied.value))
    return {}


@App.route(EndPoints.INVOICE.path_aid, methods=["GET", "POST"])
def invoice(aid):
    breq = get_dictionary_http(request)
    return jsonify({"ok":"1", "aid":aid})

@App.route(EndPoints.API.path_aid, methods=["POST"])
def api(aid:str):
    error_api = set_json_res("Invalid request detected", AnyCode.wsa_access_denied.value)
    breq = get_dictionary_http(request)
    if not aid.isdigit():
        return jsonify(error_api)
    action = ApiRequest.api.get(int(aid))

    if action is ApiRequest.api.GET_USER:
        identify = session.get("uid")
        user = ManagerUsers.get_user_by_identify(identify)
        if not user:
            return jsonify(error_api)

        return ManagerUsers.get_json_user(user)



if __name__ == "__main__":
    with App.app_context():
        AppDB.create_all()

    App.run(host="0.0.0.0", port=5000, debug=True)
