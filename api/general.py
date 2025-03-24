from api.protocol import EndPoints, ApiRequest


def get_user():
    pass

def api(api_action:int, rq_struct):
    action = ApiRequest.api.get(api_action)
    if not action:return

    if action is ApiRequest.api.GET_USER:
        pass



