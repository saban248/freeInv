import { showPopup } from "../components/popup/showMessage";
import { AppEndPoints } from "../consts";


export const Config = { 
    CLIENT_AUTH: false,
    PATH_BEFORE_REAUTH: AppEndPoints.HOME

};
export const Co_setAuth = (isAuth) => { Config.CLIENT_AUTH = isAuth; };
export const Con_GetLastPath = () => {var l = Config.PATH_BEFORE_REAUTH;Config.PATH_BEFORE_REAUTH=undefined;return l;}

export const TypicalTypeInvoice = {
    EXEMPT_DEALER: { 
        code: 1, 
        name: "עוסק פטור", 
        description: 'עסק קטן פטור מחובות מע"מ.'
    },
    LICENSED_DEALER: { 
        code: 2, 
        name: "עוסק מורשה", 
        description: 'עסק רשום האחראי על מע"מ ודיווח כספי.'
    },
    LIMITED_COMPANY: { 
        code: 3, 
        name: 'חברה בע"מ', 
        description: "תאגיד עם אחריות מוגבלת, לרוב עסקים גדולים יותר."
    },
    ASSOCIATION: { 
        code: 4, 
        name: "עמותה", 
        description: "ארגון ללא מטרות רווח הפועל על פי הנחיות משפטיות ספציפיות."
    }
};


export const WebGeneralInforamtion = {
    COMPANY_NAME_EN: "FreeInvoice",
    COMPANY_NAME_HE: "חשבונית בחינם",
    DEVELOPERS: {shaked:{name:"Shaked Tamam", mail:"shaked5001@gmail.com"}, avi:{name:"Avraham Sabban", mail:"sabann248@gmail.com"}}

}
/**
 * 
 * @param {String} code 
 * @returns {TypicalTypeInvoice | undefined}
 */
export const getTypeInvoiceByCode = (code) =>{
    return Object.values(TypicalTypeInvoice).find((invoice) => invoice.code == code);
}



export const ApiResponse = {
    success:undefined,
    notice:undefined,
    title:undefined,
    code:0
}









export const AskForShare = async () =>{
    const html = `
    <div style="padding: 20px; text-align: center;">
        <h3>שתף אתנו לחברים</h3>
        <div style="margin-top: 20px;display:flex;flex-direction:column;align-items:center;">
            <!-- WhatsApp Button -->
            <button 
                onclick="window.open('https://wa.me/?text=Share%20your%20message', '_blank');" 
                style="margin: 10px; padding: 10px 20px; background-color: #25d366; color: white; border: none; border-radius: 5px; cursor: pointer;max-width:150px;">
                WhatsApp
            </button>

            <!-- Instagram Button -->
            <button 
                onclick="window.open('https://www.instagram.com', '_blank');" 
                style="margin: 10px; padding: 10px 20px; background-color: #E4405F; color: white; border: none; border-radius: 5px; cursor: pointer;max-width:150px;">
                Instagram
            </button>

            <!-- Telegram Button -->
            <button 
                onclick="window.open('https://t.me/share/url?url=Share%20your%20message', '_blank');" 
                style="margin: 10px; padding: 10px 20px; background-color: #0088cc; color: white; border: none; border-radius: 5px; cursor: pointer;max-width:150px;">
                Telegram
            </button>
        </div>

    </div>
`;

    var text = "שתף אותנו לחברים שלך, כדי שגם הם יכולו להנות מחשבונית בחינם!"
    return await showPopup("לפני שאת/ה ממשיך", text,html, "info", 10000);
}
