import React, { useState } from "react";
import "./style.css";
import { faCheckCircle, faDownload, faLock, faSave, faUser } from "@fortawesome/free-solid-svg-icons";
import { getTypeInvoiceByCode, TypicalTypeInvoice } from "../../logic/consts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { use } from "react";
import { validateAndFormatPhone, validateIsraeliID } from "../../logic/general";



/**
 * 
 * @param {TypicalTypeInvoice} invoice 
 * @returns 
 */
export default function ClientDetails({invoice}) {
  const [isVisible, setIsVisible] = useState(false);
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [identify, setIdentify] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  return (
    <div className="detail-box" >
      <div className="detail-box-header">
        <div className="title">
          <FontAwesomeIcon icon={faUser}  className="icon"/>
          <span>פרטי לקוח</span>
        </div>
        <div className="options">
          <FontAwesomeIcon icon={faDownload} className="icon" />
        </div>
      </div>
      <div className="invoice-body">
        <div className="level">
          {fullname ? <FontAwesomeIcon icon={faCheckCircle} className="level-complete"/> : 1}
        </div>
        <div className="level-content">
          <div className="input-box">
            <label className="input-label">
              שם מלא
              <span className="require">*</span>
            </label>
            <input
              type="text"
              minLength={1}
              max={40}
              id="name"
              className="invoice-input"
              required
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
        </div>
        <div className="level">
        {email ? <FontAwesomeIcon icon={faCheckCircle} className="level-complete"/> : 2}
        </div>
        <div className="level-content">
          <div className="input-box">
            <label className="input-label">
              אימייל
            </label>
            <input
              type="email"
              minLength={1}
              id="email"
              className="invoice-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="level">
        {validateIsraeliID(identify).valid ? <FontAwesomeIcon icon={faCheckCircle} className="level-complete"/> : 3}
        </div>
        <div className="level-content">
          <div className="input-box">
            <label className="input-label">
              תעודת זהות
              <span className="require">*</span>
            </label>
            <input
              type="number"
              maxLength={10}
              className="invoice-input"
              onChange={(e) => setIdentify(e.target.value)}
            />
          </div>
        </div>
        {isVisible && <div className="level">
          {address ? <FontAwesomeIcon icon={faCheckCircle} className="level-complete"/> : 4}</div>} 
        {isVisible && <div className="level-content">
          <div className="input-box">
            <label className="input-label">
              כתובת מלאה
            </label>
            <input type="text" className="invoice-input"
            onChange={(e) => setAddress(e.target.value)}/>
          </div>
        </div>}
        {isVisible && <div className="level">
          {validateAndFormatPhone(phone).valid ? <FontAwesomeIcon icon={faCheckCircle} className="level-complete"/> : 5}</div>}
        {isVisible && <div className="level-content">
          <div className="input-box">
            <label className="input-label">מספר חיוג נוסף</label>
            <input type="number" id="phone" className="invoice-input"
            onChange={(e) => setPhone(e.target.value)} />
          </div>
        </div>}
      </div>

      <button
        className="invoice-button" type="button"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "הסתר שדות נוספים" : "הצג שדות נוספים"}
      </button>
    </div>
  );
}