import { useParams } from "react-router-dom";
import { getTypeInvoiceByCode, TypicalTypeInvoice } from "../../logic/consts";
import { ApiInvoiceRequest } from "../../consts";
import { FaEdit } from "react-icons/fa";
import DetailsForm from "./DetailsForm";
import ClientDetails from "./ClientDetails";
import Notes from "./Notes";
import Options from "./Options";
import Items from "./Items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";



export default function Invoice() {
  // this would be the form - creating a new invoice
  // we need here a new invoice object, and a logged in user/ data saved
  const { invoice_id } = useParams();
  const invoice = getTypeInvoiceByCode(invoice_id);

  // has saved id and phone number - otherwise need to fill this on the form
  // const user to get the user object connected
  /*
    1. כותרת - סוג של החשבונית 
    2. input -> 
    */

  const exampleInvoice = {
    id: invoice_id,
  };

  return (
    <div className="main-invoice margin-5">
      {/* פרטים ששמורים במערכת */}
      {/* פרטי המסמך - כל הסוגים*/}
      <div className="invoice-header">
        <FontAwesomeIcon icon={faFileInvoice} className="icon"/>
        <span className="invoice-title">{invoice.name}</span>
      </div>

      <DetailsForm invoice={invoice}/>
      {/* פרטי לקוח - כל הסוגים*/}
      <ClientDetails invoice={invoice}/>
      {/* פריטים - מה השירותים שנמכרו , עלויות, כמויות, מעמ- הכל חוץ מחשבונית עסקה, אופציונלי בקבלה*/}
      <Items />
      {/* תשלומים -בכולן*/}
      {/* הערות */}
      <Notes />
      {/* אפשרויות שליחה/ שיתוף/הדפסה - בכולן*/}
      <Options />
    </div>
  );
}
