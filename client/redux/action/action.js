import axios from "axios"
import { LOGIN, REGISTER } from "../actionType/actionType"
export const registeruser = (data,navigate)=>async(dispatch)=>{
try {
    const res = await axios.post("http://localhost:8000/user/register",data)
dispatch({
    type:REGISTER,
    payload:res.data
})
navigate("/")
} catch (error) {
   console.log(error) 
}
}
export const loginuser = (data,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post("http://localhost:8000/user/login",data)
    dispatch({
        type:LOGIN,
        payload:res.data
    })
    navigate("/")
    } catch (error) {
       console.log(error) 
    }
    }