import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { LoginTeacherId,LoginTeacherPassword} from "../utils/actions"
import {TeacherLoginService} from "../services/services"
export default function TeacherLogin() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.LoginTeacher)
    const handleTIDChange=(e)=>{dispatch(LoginTeacherId(e.target.value))}
    const handlePassChange=(e)=>{dispatch(LoginTeacherPassword(e.target.value))}

    const handleSubmit=async()=>{
       if(state.LoginTID!=="" && state.LoginPass!==""){
        var val=await TeacherLoginService(state.LoginTID,state.LoginPass);
        if(val?.loggedin){
            localStorage.setItem("TeacherToken",val?.token)
            alert("loggedin as teacher");

        }
        else{
            alert(val?.message)
        }
       }else{
           alert("fill in the required details")
       }
    }
    return (
        <div>
            t login
            <br/>
            
            <input placeholder="TeacherId"  value={state.LoginTID} onChange={handleTIDChange} type="text"/>
            <input placeholder="Password" value={state.LoginPass} onChange={handlePassChange} type="password"/>
            <button onClick={handleSubmit}>submit</button>
            <br/>
            <a href="/TeacherSignup">signup</a>

        </div>
    )
}
