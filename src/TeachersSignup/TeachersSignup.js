import React from 'react'
import { TeacherPasswordChange,TeacherNameChange,TeacherIdChange} from "../utils/actions"
import {useDispatch,useSelector} from "react-redux"
import {CreateNewTeacher} from "../services/services"
import {useHistory} from "react-router-dom"

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
                alert("Teacher Created")
                history.push({pathname:"/TeacherLogin"})
            }else{
                alert("not created")
            }
        }else{
            alert("fill in all values")
        }

    }
    return (
        <div>
            T signup
            <br/>
            
            <input placeholder="TeacherId"  value={state.TeacherId} onChange={HandleTidchange} type="text"/>
            <input placeholder="Password" value={state.Teacherpassword} onChange={HandlePasswordchange} type="password"/>
            <input placeholder="Teacher name" value={state.TeacherName} onChange={HandleNamechange} type="text"/>
            <button onClick={handleSubmit}>create</button>
        </div>
    )
}
