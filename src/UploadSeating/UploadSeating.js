import React,{useState,useEffect} from 'react'
import Header from './header'
import Modal from './Modal'
import {getAllSeating,DeleteSeating} from "../services/services"
import {Table,Button, message} from "antd";
import {DeleteOutlined } from "@ant-design/icons"
export default function UploadSeating(props) {
    var user=props.location.state?.TID
    const [AllSeatingData, setAllSeatingData] = useState([])

     const btn=async()=>{
        var val=await getAllSeating()
        setAllSeatingData(val)
     }

     useEffect(() => {
         btn()
     }, [])

     const DeleteRecord=async(id)=>{
         var val=await DeleteSeating(id);
        message.destroy("deleted element")
        btn()
     }


     const columns = [
         {
             title:"Sl.no",
             dataIndex:"RollNo",
             key:"RollNo",
             render:(tag,index,val)=><p>{val+1}</p>
         },
         {
            title: 'Roll.no',
            dataIndex: 'RollNo',
            key: 'RollNo',
          },
         {
            title: 'Student Name',
            dataIndex: 'StudentName',
            key: 'StudentName',
          },
         {
            title: 'Exam Title',
            dataIndex: 'exam',
            key: 'RollNo',
          },
        
        {
          title: 'Class Room',
          dataIndex: 'classRoom',
          key: 'classRoom',
        },
        {
            title: 'Floor',
            dataIndex: 'floor',
            key: 'classRoom',
          },
          {
            title: '',
            dataIndex: 'floor',
            render:(floor,val)=><span className="delBtn" onClick={()=>DeleteRecord(val.RollNo)}><DeleteOutlined /></span >,
            key: 'classRoom',
          }
      ];

    return (
        <div>
            <Header user={user} />
            
            <Modal refresh={btn}/>
           
            <Table dataSource={AllSeatingData} columns={columns} style={{margin:20}}/>
        </div>
    )
}
