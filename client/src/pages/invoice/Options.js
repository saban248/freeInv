import React, { useState } from "react";
import "./style.css";
export default function Options() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="detail-box" style={{ position: "relative" }}>
      <h3>שמירה ושליחה</h3>
      <div>
        {" "}
        <input type="checkbox" id="whatsapp" />
        <lable htmlFor="whatsapp">שליחת מסמך בוואטסאפ</lable>
      </div>
      <div>
        {" "}
        <input type="checkbox" id="payment" />
        <lable htmlFor="payment">שליחת קישור לתשלום</lable>
      </div>
      {isVisible && (
        <div>
          {" "}
          <input type="checkbox" id="print" />
          <lable htmlFor="print">צור מסמך להדפסה בלבד</lable>
        </div>
      )}
      {isVisible && (
        <div>
          {" "}
          <input type="checkbox" id="copy" />
          <lable htmlFor="copy">שלח עותק מסמך אלי</lable>
        </div>
      )}
      {isVisible && (
        <div>
          {" "}
          <input type="checkbox" id="invite" />
          <lable htmlFor="invite">צור הזמנה ממסמך זה</lable>
        </div>
      )}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="invoice-button"
      >
        {isVisible ? "הסתר שדות נוספים" : "הצג שדות נוספים"}
      </button>

      <div className="invoice-field row" style={{alignItems:"stretch", justifyContent: "center"}}>
        <button className="invoice-button">יצירת מסמך</button>
        <button className="invoice-button outline">תצוגה מקדימה</button>
        <button className="invoice-button outline">שמירת טיוטה</button>
      </div>
    </div>
  );
}
