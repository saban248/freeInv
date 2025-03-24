import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { AppEndPoints } from "../consts";
import { showPopup } from "../components/popup/showMessage";
import { Config, Co_setAuth } from "../logic/consts";
import { use } from "react";

export default function  ProtectedRoute({ element }) {
    const location = useLocation();
    console.log(location)
    Config.PATH_BEFORE_REAUTH = location.pathname;
    if (!Config.CLIENT_AUTH){
        showPopup("משהו קטן...", "כדי שנדע מי אתה פעם הבאה, הכנס למערכת", undefined, "success")
    }
    return true ? element : <Navigate to={AppEndPoints.AUTH} replace/>;
}