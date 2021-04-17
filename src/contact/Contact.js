import { Button, Input,message } from 'antd'
import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {ContactEmail,Contactnumber} from "../utils/actions"
import "./styles.css"
import {contactus} from "../services/services"
import {useHistory} from "react-router-dom"

export default function Contact() {
    var history=useHistory()
    var selector=useSelector((state)=>state.ContactDetails)
    var dispatch=useDispatch();

    const onclick=async ()=>{
        if(selector.number!=="" && selector.email!==""){
        var val = await contactus(selector.number,selector.email)
        if(val?.created){
            message.success("our team will get in touch with you")
            history.push({pathname:"/"})
            dispatch(ContactEmail(""))
            dispatch(Contactnumber(""))
        }
    }else{
            message.warning("zzzz")
    }
    }
    return (
        <div className="bg bgbg2">
            <div className="bgchild12">
                <h1>Contact Us</h1>
            <Input placeholder="number" className="ipbg" type="number" onChange={(e)=>{dispatch(Contactnumber(e.target.value))}}/>
            <Input placeholder="email" onChange={(e)=>{dispatch(ContactEmail(e.target.value))}}/>
            <Button className="ipbtn"onClick={onclick}  >Submit</Button>
            </div>
        </div>
    )
}
