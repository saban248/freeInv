
try:
    from srcapi.general.srcode import BaseEnumObject
except ImportError:
    print("זה ספרייה מהגיט והיא במצב פרטי")
    exit(-404)



class TypeOfBusinessInvoice(BaseEnumObject):
    # עוסק פטור
    EXEMPT_DEALER       = 1
    # עוסק מורשה
    LICENSED_DEALER     = 2
    # חברה בעמ
    LIMITED_COMPANY     = 3
    # עמותה
    ASSOCIATION         = 4



class TypeOfInvoices(BaseEnumObject):
    INVOICE_TRANSACTION         = 1
    INVOICE_TAX                 = 2
    INVOICE_TAX_RECEIPT         = 3
    INVOICE_RECEIPT             = 4
    INVOICE_CREDIT              = 5
    INVOICE_DONATION            = 6