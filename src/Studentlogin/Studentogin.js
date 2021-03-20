import React from 'react'
import {loginStudent} from "../services/services"
import {LoginRedcerStudents} from "../utils/reducer"
import { LoginPasswordChange,LoginNameChange} from "../utils/actions"
import {useDispatch,useSelector} from "react-redux"

export default function Studentogin() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.LoginRedcerStudents)

    // event handlers
    const Rollnohandler=(e)=>{dispatch(LoginNameChange(e.target.value))}
    const passwordhandler=(e)=>{dispatch(LoginPasswordChange(e.target.value))}
    const login=async ()=>{
        var val=await loginStudent(state.StudentRollno,state.Studentpassword);
        if(val?.loggedin){
            localStorage.setItem("TOKEN",val?.token)
            alert("logged in")
        }
        else{
            alert(val?.message)
        }
    }
    return (
        <div>
            s logins
            <input type="text" onChange={Rollnohandler} placeholder="Rollno"/>
            <input type="password" onChange={passwordhandler} placeholder="password"/>
            <button onClick={login}>done</button>
            <a href="/StudentsSignup">create a account</a>
        </div>
    )
}
