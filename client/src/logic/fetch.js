import { LOCAL_SERVER } from "../consts";
import { ApiResponse } from "./consts";

/**
 * 
 * @param {const [first, setFirst] = useState(second)} setLoading 
 * @param {const [first, setfirst] = useState(second)} setError 
 * @param {const [first, setfirst] = useState(second)} setData 
 * @param {String} path 
 * @param {String} method 
 * @returns {ApiResponse}
 */
export const fetchFromServer = async (
  path,
  method,
  body
) => {
;
  let data = null;
  method = method ? method : "POST"
  console.log(method)
  try {
    
    const res = await fetch(LOCAL_SERVER +  path, 
      { method: method ,
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(body)
      });
    
    if (method.toLowerCase() === "post"){
        data = await res.json();
    }
    else{
        data = await res.text();

    }
    if (!res.ok) {

      return;
    }


    return data;
  } catch (err) {
    return data;
  }

};
