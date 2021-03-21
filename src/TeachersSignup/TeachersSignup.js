import React from 'react'
import { TeacherPasswordChange,TeacherNameChange,TeacherIdChange} from "../utils/actions"
import {useDispatch,useSelector} from "react-redux"
import {CreateNewTeacher} from "../services/services"
import {useHistory} from "react-router-dom"
import {message,Input,Button} from "antd"

export default function TeachersSignup() {
    const history=useHistory();
    const dispatch = useDispatch()
    const state = useSelector(state => state.TeacherSignup)
    

    // ?event handlers
    const HandleNamechange=(e)=>dispatch(TeacherNameChange(e.target.value))
    const HandlePasswordchange=(e)=>dispatch(TeacherPasswordChange(e.target.value))
    const HandleTidchange=(e)=>dispatch(TeacherIdChange(e.target.value))
    const handleSubmit=async()=>{
        if(state.TeacherId!=="" && state.TeacherName!=="" && state.Teacherpassword.length>=3){
            var val=await CreateNewTeacher(state.TeacherId,state.Teacherpassword,state.TeacherName)
            if(val?.Created){
                message.success("Teacher Created")
                history.push({pathname:"/TeacherLogin"})
            }else{
                message.warning("Please Enter a unique TeacherId")
            }
        }else{
            message.error("Please don't leave fields empty")
        }

    }
    return (
        <div className="parentLogin" style={{marginTop:"50pt"}}>
            <h1 className="head">Admin Signup</h1>
            <br/>
            
            <Input placeholder="TeacherId"  value={state.TeacherId} onChange={HandleTidchange} type="text"/>
            <br/>
            <Input placeholder="Password" value={state.Teacherpassword} onChange={HandlePasswordchange} type="password"/>
            <br/>
            <Input placeholder="Teacher name" value={state.TeacherName} onChange={HandleNamechange} type="text"/>
            <br/>
            

            <Button  style={{marginLeft:"auto"}} onClick={handleSubmit}>create account</Button>
            
        </div>
    )
}
