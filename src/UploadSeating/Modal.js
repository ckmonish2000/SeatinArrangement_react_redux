import React from 'react'
import {Modal as Modals,Input, message} from "antd"
import {useSelector,useDispatch} from "react-redux"
import {CloseNewModal,ModalSClass,ModalSRollno,ModalSName,ModalSFloor,ModalSExam} from "../utils/actions"
import "../styles/Modal.css"
import {NewSeating} from "../services/services"

export default function Modal({refresh}) {
    const state = useSelector(state => state.OpenNewModal)
    const state2 = useSelector(state => state.ModalValues)
    const dispatch = useDispatch();
    

    

    // event handlers
    const handlecancel=()=>{
        dispatch(CloseNewModal())
        dispatch(ModalSName(""))
        dispatch(ModalSRollno(""))
        dispatch(ModalSFloor(""))
        dispatch(ModalSClass(""))
        dispatch(ModalSExam(""))
    }
    const handleNameChange=(e)=>dispatch(ModalSName(e.target.value))
    const handleRollChange=(e)=>dispatch(ModalSRollno(e.target.value))
    const handleFloorChange=(e)=>dispatch(ModalSFloor(e.target.value))
    const handleClassChange=(e)=>dispatch(ModalSClass(e.target.value))
    const handleExamTitleChange=(e)=>dispatch(ModalSExam(e.target.value))
    const handleOk=async()=>{
        if(state2.Modalname!=="" && state2.ModalRollno!=="" && state2.ModalClass!=="" && state2.ModalExam!==""  ){
            var val=await NewSeating(state2.Modalname,state2.ModalRollno,state2.ModalClass,state2.ModalFloor,state2.ModalExam);
            if(val?.Seating_created){
                message.success(`Uploaded record of ${state2.ModalRollno} for ${state2.ModalExam}`)
                refresh();
                handlecancel()
            }else{
                message.error("records alredy exsist")
            }
        }else{
            message.warning("please fill all values")
        }
    }

    return (
        <div>
            <Modals visible={state} title="Add New Student" onCancel={handlecancel} onOk={handleOk}>
            <Input type="text" placeholder="Student Name" value={state2.Modalname} onChange={handleNameChange} className="ip"/>
            <Input type="text" placeholder="Roll No" value={state2.ModalRollno} onChange={handleRollChange} className="ip"/>
            <Input type="number" placeholder="floor" value={state2.ModalFloor} onChange={handleFloorChange} className="ip"/>
            <Input type="text" placeholder="Class Room" value={state2.ModalClass} onChange={handleClassChange} className="ip"/>
            <Input type="text" placeholder="Exam Title" value={state2.ModalExam} onChange={handleExamTitleChange} className="ip"/>
            </Modals>
        </div>
    )
}   
