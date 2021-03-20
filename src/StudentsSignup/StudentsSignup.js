import React,{useState} from 'react'
import {createStudent} from "../services/services"
import {SignupNameChange,SignupRollNoChange,SignupPasswordChange} from "../utils/actions"
import {useDispatch,useSelector} from "react-redux"
import {useHistory} from "react-router-dom"

export default function StudentsSignup() {
   const dispatch = useDispatch();
   var history=useHistory();
    const state = useSelector(state => state.SignupReducer)

    const handleSubmit=async ()=>{
        try{
            console.log("intry");
        const val=await createStudent(state?.name,state?.rollno,state?.password);
        if(val?.Created){
            alert("created")
            history.push({pathname:"/StudentLogin"})
        }
        else{
            alert(val?.message)
        }
        }
        catch(err){
            console.log("inerr");
            console.log(err);
        }
        
    }

    return (
        <div>
            <input type="text" onChange={(e)=>dispatch(SignupNameChange(e.target.value))} placeholder="student name"/>
            <input type="password" onChange={(e)=>dispatch(SignupPasswordChange(e.target.value))} placeholder="password"/>
            <input type="Rollno" onChange={(e)=>dispatch(SignupRollNoChange(e.target.value))} placeholder="Rollno"/>
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}
