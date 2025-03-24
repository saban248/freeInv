from api.protocol import ApiRequest


def api_invoice(api_action:int, **data):
    action = ApiRequest.invoice.get(api_action)
    if not action:return
    # >>
    if action is ApiRequest.invoice.CREATE_INVOICE:
        pass