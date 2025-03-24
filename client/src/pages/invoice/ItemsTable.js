import React from "react";
import "./style.css";
export default function ItemsTable({ items }) {
  return (
    <div>
      <table>
        <tr>
          <th>פעולות</th>
          <th>מק"ט</th>
          <th>פירוט</th>
          <th>כמות</th>
          <th>מחיר</th>
          <th>סה"כ</th>
        </tr>
        {items?.length > 0 &&
          items?.map((item) => (
            <tr>
              <td>
                <button>save</button>
                <button>delete</button>
                <button>edit</button>
              </td>
              <td>{item.code}</td> <td>{item.desc}</td> <td>{item.quantity}</td>{" "}
              <td>{item.price}</td>{" "}
              <td>
                {/* {item.calcTotal} */}
                {item.isMhm}
              </td>
            </tr>
          ))}
        {items?.length === 0 && (
          <tr colSpan={6} className="no-items">
            no items in chart, please add{" "}
          </tr>
        )}
        <tr>
          <th rowspan="4" colSpan={4}>
            {" "}
            <input type="checkbox" /> with mhm
          </th>

          <td colSpan={2} className="no-border">
            <tr>
              <td>before mhm</td>
              <td>2</td>
            </tr>
            <tr>
              <td>mhm 18%</td>
              <td>5</td>
            </tr>
            <tr>
              <td>no mhm rows listed</td>
              <td>2</td>
            </tr>
            <tr className="no-border total">
              <td>total including mhm</td>
              <td>9</td>
            </tr>
          </td>
        </tr>
      </table>
    </div>
  );
}
