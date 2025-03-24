import React from "react";
import "./style.css";
export default function Notes() {
  return (
    <div className="detail-box" style={{ position: "relative" }}>
      <h3>הערות</h3>

      <label htmlFor="dueto">לתשלום עד:</label>
      <input
        type="date"
        placeholder="לחץ להזנת תאריך"
        id="dueto"
        className="invoice-input"
      />

      <div className="invoice-field row">
        {" "}
        <div className="invoice-field">
          <lable htmlFor="docComments">הערות למסמך: </lable>
          <textarea id="docComments" rows={5} cols={60} className="invoice-area"/>
        </div>
        <div className="invoice-field">
          {" "}
          <lable htmlFor="additionalContent">תוכן נוסף לשליחה במייל: </lable>
          <textarea id="additionalContent" rows={5} cols={60} className="invoice-area"/>
        </div>
      </div>
    </div>
  );
}
