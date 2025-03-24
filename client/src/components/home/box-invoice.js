import "./style.css";
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { AskForShare, TypicalTypeInvoice } from "../../logic/consts";
import { showPopup } from "../popup/showMessage";
import { useNavigate } from "react-router-dom";
import { AppEndPoints } from "../../consts";


/**
 * 
 * @param {{name:0,code:0, description:0}} invoice 
 * @returns 
 */
export default function BoxInvoice({invoice}) {
    const nav = useNavigate();
    const open_new_invoice = async (invoice_id) =>{
        const continu = await AskForShare();
        if (!continu){
            return
        }
        nav(`${AppEndPoints.INVOICE}/${invoice_id}`);

    }
    return (
        <div className="box-invoice" id={invoice.code}>
            <div className="header">
                <div className="name">{invoice.name}</div>
                <FontAwesomeIcon className="icon" icon={faPlus} onClick={() => open_new_invoice(invoice.code)}/>
            </div>
            <div className="body">
                <div className="description">
                    {invoice.description}
                </div>
            </div>
        </div>
    );
}