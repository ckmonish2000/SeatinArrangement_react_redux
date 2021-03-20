import React from 'react'
import {useHistory} from "react-router-dom"
import {createStudent} from "../services/services"

export default function Home() {
    createStudent()
    var history=useHistory()
    return (
        <div>
            <button onClick={()=>{history.push({pathname:"/TeacherLogin"})}}>Teacher</button>
            <button onClick={()=>{history.push({pathname:"/StudentLogin"})}}>Student</button>
        </div>
    )
}
