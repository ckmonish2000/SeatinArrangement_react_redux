import React from 'react'
import { Menu, Dropdown, Button, Space } from 'antd';
import "../styles/HeaderStyle.css"
import {useHistory} from "react-router-dom"
import {NewModal,CloseNewModal} from "../utils/actions"
import {useDispatch} from "react-redux"


export default function Header({user}) {
    const history=useHistory()
    const dispatch = useDispatch()
    const Logout=()=>{
        localStorage.removeItem("TeacherToken")
        history.push({pathname:"/TeacherLogin"})
    }
    const OpenModal=()=>{dispatch(NewModal())}
    const menu = (
        <Menu>
          <Menu.Item>
            <a  onClick={OpenModal}>
             Add New Student
            </a>
          </Menu.Item>
          <Menu.Item>
            <a  onClick={Logout}>
              Log out
            </a>
          </Menu.Item>
        </Menu>
      );
      function capitalizeFirstLetter(string) {
        return string?.charAt(0).toUpperCase() + string?.slice(1);
      }

    return (
        <div className="HeadParent">
            <h1 style={{opacity:"0.8"}}>Admin Panel</h1>
            <Dropdown overlay={menu}>
            <Button className="userBtn">{capitalizeFirstLetter(user?.slice(0, 5))}</Button>
            </Dropdown>
        </div>
    )
}
