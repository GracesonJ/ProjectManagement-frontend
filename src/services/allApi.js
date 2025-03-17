import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

// register owner
export const registerOwnerAPI = async (reqBody)=>{
    return await commonApi('POST', `${serverUrl}/register-owner`, reqBody, "")
}

//login request
export const loginApi = async(reqBody)=>{
    return await commonApi('POSt', `${serverUrl}/login`, reqBody,"")
}