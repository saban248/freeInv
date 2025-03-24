import React, { useEffect, useState } from "react";
import "./style.css";
import { FaLock, FaLockOpen, FaInfo, FaCheckCircle, FaPercent } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice, faEllipsis, faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import { getTypeInvoiceByCode, TypicalTypeInvoice } from "../../logic/consts";
import { DEFAULT_TAX } from "../../consts";
import Switch from "@mui/material/Switch";

/**
 * 
 * @param {TypicalTypeInvoice} invoice 
 * @returns 
 */
export default function DetailsForm({invoice}) {
  const [invoice_tax, setInvoiceTax] = useState(parseInt(DEFAULT_TAX))
  const [tax, setTax] = useState(true);
  const [mhm, withMhm] = useState(false);
  const [lock, setLock] = useState(true);
  const [date, setDate] = useState(null);
  const [about, setAbout] = useState("")

  const updateInvoiceTax = (integer) =>{
    console.log(integer)
    if (!tax)return;
    if (!integer){
      setInvoiceTax(parseInt(invoice_tax))
    }
    else{
      setInvoiceTax(parseInt(invoice_tax))
    }
  }

  return (

    <div className="detail-box main-detail-box">
      <div className="detail-box-header">
        <div className="title">
          <FontAwesomeIcon icon={faFileInvoice} className="icon"/>
          <span>כללי</span>
        </div>
        {/* <div className="options">
          <FontAwesomeIcon icon={faEllipsis} className="icon"/>
        </div> */}
      </div>
      <div className="invoice-body"> {/* אלאמנט ראשי שמכיל את כל השדות קלט*/}
        <div className="level">
          {date  ? <FontAwesomeIcon icon={faCheckCircle} className="level-complete"/> : 1}
        </div>
        <div className="level-content"> {/* תאריך המסמך */}
          <div className="input-box">
            <label for="date" className="input-label">
              תאריך המסמך
              <span className="require">*</span>
            </label>
            <input
              max={lock ? new Date().toISOString().substring(0, 10) : undefined}
              type="date"
              id="date"
              required
              value={date ? date : 0}
              onChange={(e) => {setDate(e.currentTarget.value);}}
              className="invoice-input"
            />
          </div>
          <div className="btn-input-options">
            <div className="btn-input-header">
              <span>פעולות</span>
            </div>
            <div className="btn-input-body">
              <button className="invoice-button" onClick={() => setDate(new Date().toISOString().substring(0, 10))}>
                היום
              </button>
              <div>
                <span onClick={() => setLock(!lock)} className={`icon-lock ${!lock ? "icon-lock-out" : ""}`}>
                {lock ? <FaLock /> : <FaLockOpen />}
                </span>
                <span className="about-lock" style={{display:!lock?"inline":"none", marginRight:"10px"}}>
                  <FaInfo/>
                  לפי תקנון רשות המסים ניתן להגדיר תאריך נוכחי או שעבר. 
                </span>
              </div>
            </div>

          </div>
        </div>
        <div className="level">
        {about  ? <FontAwesomeIcon icon={faCheckCircle} className="level-complete"/> : 2}
        </div>
        <div className="level-content"> {/* תיאור כללי */}
          <div className="input-box">
            <label for="description" className="input-label">תיאור כללי</label>
            <input
              type="text"
              id="desc"
              className="invoice-input"
              onChange={(e) => setAbout(e.target.value)}
              placeholder="תיאור כללי של המסמך"
            />
          </div>
        </div>
        <div className="level">
        {(!tax || invoice_tax) ? <FontAwesomeIcon icon={faCheckCircle} className="level-complete"/> : 3}
        </div>
        <div className="level-content"> {/* מע"מ */}
          <div className="input-box" >
            <label className="input-label">סך מע"מ 
              <span className="require">*</span>
            </label>
            <div className="box-integer-range">
              <div className="input-icon">
                <input disabled={!tax} type="tel" maxLength={2} className="input-int-range" placeholder={invoice_tax}   onInput={(e) => updateInvoiceTax(e.target.value)}/>
                <FaPercent className="input-icon-icon"/>
              </div>
            </div>
          </div>
          <div className="btn-input-options">
            <div className="btn-input-header">
              <span>פעולות</span>
            </div>
            <div className="btn-input-body">
              <Switch defaultChecked 
              checked={tax}
              onChange={(e) =>{ setTax(e.target.checked); setInvoiceTax(e.target.checked ? DEFAULT_TAX: 0)}}/>
              <span className="about-lock" style={{display:!tax?"inline":"none", marginLeft:"10px"}}>
                <FaCheckCircle style={{marginLeft:"10px", color:"green"}}/>
                הוגדר ללא מע"מ 
              </span>
            </div>

          </div>
        </div>
      </div>


      {/* יכול להוסיף כאן אחר כך משתמש */}
      {/* יכול להוסיף תגיות שתחת משתמש ולנהל תגיות כדי לשייך מסמסכים לאותו פרויקט */}
    </div>
  );
}
