import React from 'react'
import Header from './ViewHeader'
import {Button, Input,message,Tooltip} from"antd"
import {SearchOutlined} from "@ant-design/icons"
import {SearchVal,resultVal} from "../utils/actions"
import {useSelector,useDispatch} from "react-redux"
import {getSeating} from "../services/services"
import "../styles/viewSeat.css"

export default function ViewSeating(props) {
    const user=props.location.state.id
    const dispatch = useDispatch()
    const state = useSelector(state => state.UpdateSearch)
    const state2 = useSelector(state => state.UpdateSearchResult)
    const onSearch=async()=>{
       if(state!==""){
        var val=await getSeating(user,state);
        dispatch(resultVal(val));
       }else{
           message.warning("Enter Exam Title")
       }
    }
    const handelchange=(e)=>dispatch(SearchVal(e.target.value))
    return (
        <div>
            <Header user= {user}/>
            <div className="edge">
            <h1 className="onedgeTitle">Instaseat</h1>
            <div className="onedge">
            <Input value={state} className="StudentSearch edgeField" placeholder="Exam Title" onChange={handelchange}/>
            <Tooltip title="search for your seating" placement="bottom">
            <span className="edgetBtn" onClick={onSearch}><SearchOutlined /></span>
            </Tooltip>
            </div>
            </div>
           {state2.length>0?(<div className="post">
            <h1>Exam Title: <span>{state2[0]?.exam}</span></h1>
            <h3>Class Room: <span>{state2[0]?.classRoom}</span></h3>
            <h4>Floor: <span>{state2[0]?.floor}</span></h4>
            <div></div>
           </div>):(SearchVal!==""?"":"No Element")}
        </div>
    )
}
