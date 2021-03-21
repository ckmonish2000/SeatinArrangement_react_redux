import React,{useState} from 'react'
import {createStudent} from "../services/services"
import {NameChange,RollNoChange,PasswordChange} from "../utils/actions"
import {useDispatch,useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import {message,Input,Button} from "antd"

export default function StudentsSignup() {
   const dispatch = useDispatch();
   var history=useHistory();
    const state = useSelector(state => state.SignupReducer)

    const handleSubmit=async ()=>{
        try{
        if(state.name!=="" && state.password!=="" && state.rollno>=3){
            const val=await createStudent(state?.name,state?.rollno,state?.password);
        if(val?.Created){
            message.success("Created new students")
            history.push({pathname:"/StudentLogin"})
        }
        else{
            message.error(val?.message)
        }
        }else{
            message.warning("Enter valid details")
        }
        }
        catch(err){
            message.error(err);
        }
        
    }

    return (
        <div className="parentLogin" style={{marginTop:"50pt"}}>
            <h1 className="head">Students Signup</h1>
            <br/>
            <Input type="text" onChange={(e)=>dispatch(NameChange(e.target.value))} placeholder="student name"/>
            <br/>
            <Input type="password" onChange={(e)=>dispatch(PasswordChange(e.target.value))} placeholder="password"/>
            <br/>
            <Input type="Rollno" onChange={(e)=>dispatch(RollNoChange(e.target.value))} placeholder="Rollno"/>
            <br/>
            <Button style={{marginLeft:"auto"}} onClick={handleSubmit}>Create Student Account</Button>
        </div>
    )
}
