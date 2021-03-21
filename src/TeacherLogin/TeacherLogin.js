import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { LoginTeacherId,LoginTeacherPassword} from "../utils/actions"
export default function TeacherLogin() {
    return (
        <div>
            t login
            <br/>
            
            <input placeholder="TeacherId"   type="text"/>
            <input placeholder="Password"  type="password"/>
            <button>submit</button>
            <br/>
            <a href="/TeacherSignup">signup</a>

        </div>
    )
}
