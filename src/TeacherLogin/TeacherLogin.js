import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { LoginTeacherId,LoginTeacherPassword} from "../utils/actions"
import {TeacherLoginService} from "../services/services"
import {message,Input,Button} from "antd"
import "../styles/Loginstyle.css"
import {useHistory} from "react-router-dom"

export default function TeacherLogin() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.LoginTeacher)
    const handleTIDChange=(e)=>{dispatch(LoginTeacherId(e.target.value))}
    const handlePassChange=(e)=>{dispatch(LoginTeacherPassword(e.target.value))}
    var history=useHistory();
    const handleSubmit=async()=>{
       if(state.LoginTID!=="" && state.LoginPass!==""){
        var val=await TeacherLoginService(state.LoginTID,state.LoginPass);
        if(val?.loggedin){
            localStorage.setItem("TeacherToken",val?.token)
            message.success(`loggedin as teacher ${state.LoginTID}`);
            history.push({pathname:"/upload"})
        }
        else{
            message.error(val?.message)
        }
       }else{
           message.warning("fill in the required details")
       }
    }
    return (
        <div className="parentLogin" >
            <h1 className="head">Admin Login</h1>
            <br/>
            
            <Input placeholder="TeacherId"  value={state.LoginTID} onChange={handleTIDChange} type="text"/>
            <br/>
            <Input placeholder="Password" value={state.LoginPass} onChange={handlePassChange} type="password"/>
            <br/>
            <div>
            <a href="/TeacherSignup">Don't have a account? Signup</a>
            <Button className="LoginBtn" onClick={handleSubmit}>Login</Button>
            
           
            </div>
        </div>
    )
}
