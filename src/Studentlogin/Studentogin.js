import React from 'react'
import {loginStudent} from "../services/services"


export default function Studentogin() {
    loginStudent();
    return (
        <div>
            s logins
            <input type="text" placeholder="Rollno"/>
            <input type="password" placeholder="Rollno"/>
            <button onClick={()=>{console.log('dfusfdushf');}}>done</button>
            <a href="/StudentsSignup">create a account</a>
        </div>
    )
}
