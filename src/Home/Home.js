import React from 'react'
import {useHistory} from "react-router-dom"
import "../styles/home.css"
export default function Home() {
    var history=useHistory()
    return (
        <div className="bg">
           <div className="nav">
           <button className="navbtn" onClick={()=>{history.push({pathname:"/TeacherLogin"})}}>Teacher</button>
            <button className="navbtn" onClick={()=>{history.push({pathname:"/StudentLogin"})}}>Student</button>
           </div>
           <div>
           </div>
           <h1 className="Title">
                InstaSeat
            </h1>
        </div>
    )
}
