import React from 'react'
import Header from './ViewHeader'
import {Button, Input,message,Tooltip} from"antd"
import {SearchOutlined} from "@ant-design/icons"
import {SearchVal,resultVal} from "../utils/actions"
import {useSelector,useDispatch} from "react-redux"
import {getSeating} from "../services/services"

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
            <div style={{display:"flex",justifyContent:"center"}}>
            <Input value={state} className="StudentSearch" placeholder="Exam Title" onChange={handelchange}/>
            <Tooltip title="search for your seating" placement="bottom">
            <span style={{marginTop:"15pt",cursor:"pointer"}} onClick={onSearch}><SearchOutlined /></span>
            </Tooltip>
            </div>
           {state2.length>0?(<div>
            <h1>Exam Title: <span>{state2[0]?.exam}</span></h1>
            <h3>Class Room: <span>{state2[0]?.classRoom}</span></h3>
            <h4>Floor: <span>{state2[0]?.floor}</span></h4>
           </div>):""}
        </div>
    )
}
