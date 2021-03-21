import React from 'react'
import {loginStudent} from "../services/services"
import {LoginRedcerStudents} from "../utils/reducer"
import { LoginPasswordChange,LoginNameChange} from "../utils/actions"
import {useDispatch,useSelector} from "react-redux"
import {message,Input,Button} from "antd"

export default function Studentogin() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.LoginRedcerStudents)
    // event handlers
    const Rollnohandler=(e)=>{dispatch(LoginNameChange(e.target.value))}
    const passwordhandler=(e)=>{dispatch(LoginPasswordChange(e.target.value))}
    const login=async ()=>{
      if(state.StudentRollno!=="" && state.Studentpassword!==""){
        var val=await loginStudent(state.StudentRollno,state.Studentpassword);
        console.log(val);
        if(val?.loggedin){
            localStorage.setItem("StudentTOKEN",val?.token)
            message.success(`Welcome ${state.StudentRollno}`)
        }
        else{
            message.error(val?.message)
        }
      }else{
          message.warning("Please fill in the required details")
      }
    }
    return (
        <div className="parentLogin" style={{marginTop:"50pt"}}>
            <h1 className="head">Student's Login</h1>
            <br/>
            <Input type="text" onChange={Rollnohandler} placeholder="Rollno"/>
            <br/>
            <Input type="password" onChange={passwordhandler} placeholder="password"/>
            <br/>
            <div>
            <a href="/StudentsSignup">Don't have a account? Signup</a>
            <Button className="LoginBtn" onClick={login}>Login Student</Button>
            </div>
        </div>
    )
}
