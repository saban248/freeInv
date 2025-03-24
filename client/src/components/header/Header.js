import React from "react";
import logoDemo from "../../assets/logoDemo.png";
import "../header/style.css";
import "../../assets/stylesheet/general.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileInvoice, faFileCirclePlus, faUserTie, faFolderOpen} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { AppEndPoints } from "../../consts";


export default function Header() {
  const nav = useNavigate();

  return (
  <header className="header-main">
    <div className="box">
      <div className="name-company">
        <span className="first">Free</span>
        <span className="second">Invoice</span>
      </div>
      <button className="header-menu-button" aria-label="Open invoice menu">
        <FontAwesomeIcon icon={faFileInvoice} onClick={() => nav(AppEndPoints.HOME)}/>
      </button>
    </div>
    <nav className="box header-menu">
      <div className="item">
      <FontAwesomeIcon className="icon" icon={faFileCirclePlus} />
        <div className="name">צור חשבונית</div>
      </div>
      <div className="item">
      <FontAwesomeIcon className="icon" icon={faUserTie} />
        <div className="name">פרופיל</div>
      </div>
      <div className="item">
        <FontAwesomeIcon className="icon" icon={faFolderOpen} />
        <div className="name">כל המסמכים שלי</div>
      </div>
    </nav>

  </header>
  );
}