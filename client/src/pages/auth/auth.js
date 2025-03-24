import React, { useState } from 'react'
import "./style.css"
import "../../assets/stylesheet/general.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Config, Co_setAuth, WebGeneralInforamtion, Con_GetLastPath } from '../../logic/consts';
import { validateAndFormatPhone, validateIsraeliID } from '../../logic/general';
import { showPopup } from '../../components/popup/showMessage';
import { use } from 'react';
import { fetchFromServer } from '../../logic/fetch';
import { AppEndPoints } from '../../consts';
import { useNavigate } from 'react-router-dom';



export default function  Auth() {
    const nav = useNavigate();
    const [phone, setPhone] = useState("");
    const [isValid, setIsValid] = useState(true);
    const phoneHandle = (e) => {
        const phoneNumber = e.target.value;
        setPhone(phoneNumber);
    
        const { valid , result} = validateAndFormatPhone(phoneNumber);
        setIsValid(valid);
      };

    const [identify, setID] = useState("")
    const [isValidID, setIsValidID] = useState(true)
    const identifyHandle = (e) => {
        const phoneNumber = e.target.value;
        setID(phoneNumber);
    
        const { valid , result} = validateIsraeliID(phoneNumber);
        setIsValidID(valid);
      };

    const authenticate = async() =>{
        var v_phone = validateAndFormatPhone(phone);
        if (!v_phone.valid){
            await showPopup("שם לב", v_phone.result)
            return
        }
        var v_id = validateIsraeliID(identify);

        if (!v_id.valid){
            await showPopup("שם לב", v_id.result)
            return
        }
        
        const data = await fetchFromServer(AppEndPoints.AUTH, undefined, {id:identify, phone:phone});
        if (!data.success){
            await showPopup("אופסס", data.notice, undefined, "error");
            return
        }
        await showPopup("מעולה!", data.notice, undefined, "success");
        Co_setAuth(true)
        var location = Con_GetLastPath()
        if (!location){return}
        nav(location)


    }
    return (
        <div className="main-auth margin-30 margin-top-5">
            <div className='header-auth'>
                <FontAwesomeIcon icon={faLock} className='icon'/>
                <span className='title'> כניסה ל{WebGeneralInforamtion.COMPANY_NAME_HE}</span>
            </div>
            <div className='body-auth margin-top-5'>
                <input type='tel' placeholder='מספר פאלפון' className={"input-auth "+(isValid ? "" : "invalid-input")} value={phone} onChange={phoneHandle}/>
                <input type='tel' placeholder='תעודת זהות' className={"input-auth "+(isValidID ? "" : "invalid-input")} value={identify} onChange={identifyHandle}/>
                <button type="button" className='btn-auth' onClick={authenticate} >צור חשבונית עכשיו</button>
            </div>
        </div>
  )
}
