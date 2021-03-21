import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { LoginTeacherId,LoginTeacherPassword} from "../utils/actions"

export default function TeacherLogin() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.LoginTeacher)
    const handleTIDChange=(e)=>{dispatch(LoginTeacherId(e.target.value))}
    const handlePassChange=(e)=>{dispatch(LoginTeacherPassword(e.target.value))}
    
    return (
        <div>
            t login
            <br/>
            
            <input placeholder="TeacherId"  value={state.LoginTID} onChange={handleTIDChange} type="text"/>
            <input placeholder="Password" value={state.LoginPass} onChange={handlePassChange} type="password"/>
            <button>submit</button>
            <br/>
            <a href="/TeacherSignup">signup</a>

        </div>
    )
}
