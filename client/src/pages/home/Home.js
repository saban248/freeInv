import React, { useEffect, useState } from 'react'
import './style.css';
import '../../assets/stylesheet/general.css'
import BoxInvoice from '../../components/home/box-invoice';
import { TypicalTypeInvoice } from '../../logic/consts';

export default function Home() {
  return (
    <div className="invoice-options margin-15">
      <div className="title">
         צור חשבונית 
          <span style={{color:"#B78E12", marginRight:"10px"}}>בחינם</span>
      </div>
      <div className="b-title">
            חשבוניות שתוכל ליצור <span style={{color:"#B78E12"}}>בחינם</span>
      </div>
      <div className="list-options">
      {Object.values(TypicalTypeInvoice).map((invoice) => (
        <BoxInvoice invoice={invoice} key={invoice.code} />
      ))}
      </div>
    </div>

  )
}
