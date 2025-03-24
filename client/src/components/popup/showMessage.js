import Swal from 'sweetalert2';


const TITLE = "שם לב"
const DEFAULT_ICON = "info"


export const showPopup = async (title=TITLE, text=undefined, html=undefined, icon=DEFAULT_ICON, sec=5000) => {
    const { value: userResponse } = await Swal.fire({
        title: title,
        text: text,
        icon:icon,
        showCancelButton: true,
        confirmButtonText: 'המשך',
        cancelButtonText: 'סגור',
        reverseButtons:true,
        timer:sec,
        timerProgressBar:true,
        focusCancel:true,
        html:html,
    
    });

    if (userResponse) {
        // Simulate API call
        // Replace with your actual API logic
        // await fetch('/api/endpoint');
        return true;
    } else {
        return false;
    }
};
