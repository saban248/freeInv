import React, { useState } from "react";
import ItemsTable from "./ItemsTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Items() {
  const [isVisible, setIsVisible] = useState(false);
  const [items, setItems] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    const form = e.target;
    let code = form.code.value;
    let desc = form.desc.value;
    let quantity = form.quantity.value;
    let price = form.price.value;
    let isMhM = form.mhmSelection.value;
    let note = form.note.value;
    let discount = form.discount.value;
    let discountType = form.discountType.value;

    const item = {
      id: Date.now(),
      code: code,
      desc: desc,
      quantity: quantity,
      price: price,
      isMhM: isMhM,
      discount: discount,
      discountType: discountType,
      note: note,
    };

    setItems([...items, item]);
    form.reset();
  };
  return (
    <div className="detail-box" >
      <div className="detail-box-header">
        <div className="title">
          <FontAwesomeIcon icon={faUser}  className="icon"/>
          <span>פריטים</span>
        </div>
        <div className="options">
          <FontAwesomeIcon icon={faEllipsis} className="icon" />
        </div>
      </div>
      <form
        className={`invoice-field ${isVisible ? "" : "row"}`}
        onSubmit={(e) => addItem(e)}
      >
        <div>
          <div className="invoice-field row">
            {" "}
            <div className="invoice-field">
              <lable htmlFor="code">מק"ט</lable>
              <input
                name="code"
                type="text"
                id="code"
                className="invoice-input"
                placeholder="שדה אופציונלי"
              />
            </div>
            <div className="invoice-field">
              {" "}
              <lable htmlFor="item-desc">פירוט*</lable>
              <div
                className="invoice-field row"
                style={{ position: "relative" }}
              >
                {" "}
                <input
                  name="desc"
                  type="text"
                  id="item-desc"
                  className="invoice-input"
                  required
                  placeholder="הוסיפו פה במקור השלמה אוטומטית - תחליט"
                />
                <button
                  className="invoice-button outline"
                  type="button"
                  style={{ position: "absolute", bottom: 2, left: 0 }}
                >
                  לרשימה
                </button>
              </div>
            </div>
            <div className="invoice-field">
              {" "}
              <lable htmlFor="quantity">כמות</lable>
              <input
                name="quantity"
                type="number"
                min={1}
                value={1}
                id="quantity"
                className="invoice-input"
              />
            </div>
            <div className="invoice-field">
              {" "}
              <lable htmlFor="price">מחיר*</lable>
              <input
                name="price"
                type="number"
                min={1}
                id="price"
                className="invoice-input"
                required
              />
              <select name="mhmSelection">
                <option value={"without"}>בלי מע"מ</option>
                <option value={"with"}>עם מע"מ</option>
                <option value={"before"}>לפני מע"מ</option>
              </select>
            </div>
          </div>
          {isVisible && (
            <div className="invoice-field row">
              <div className="invoice-field">
                {" "}
                <lable htmlFor="note">הערה</lable>
                <input
                  name="note"
                  type="text"
                  id="note"
                  className="invoice-input"
                  placeholder="הערה ייחודית לפריט זה"
                />
              </div>
              <div className="invoice-field">
                {" "}
                <lable htmlFor="discount">הנחה</lable>
                <input
                  name="discount"
                  type="number"
                  min={0}
                  value={0}
                  id="discount"
                  className="invoice-input"
                />
                <select name="discountType">
                  <option value={"precentage"}>%</option>
                  <option value={"shekel"}>שקלים</option>
                </select>
              </div>
            </div>
          )}

          <button
            onClick={() => setIsVisible(!isVisible)}
            className="invoice-button"
            type="button"
          >
            {isVisible ? "הסתר שדות נוספים" : "הצג שדות נוספים"}
          </button>
        </div>
        <button type="submit" className="invoice-button">
          הוסף פריט
        </button>
      </form>

      <ItemsTable items={items} />
    </div>
  );
}
