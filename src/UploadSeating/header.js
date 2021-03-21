import React from 'react'
import { Menu, Dropdown, Button, Space } from 'antd';
import "../styles/HeaderStyle.css"
import {useHistory} from "react-router-dom"

export default function Header() {
    const history=useHistory()
    const Logout=()=>{
        localStorage.removeItem("TeacherToken")
        history.push({pathname:"/TeacherLogin"})
    }
    
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
             Add New Student
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#" onClick={Logout}>
              Log out
            </a>
          </Menu.Item>
        </Menu>
      );


    return (
        <div className="HeadParent">
            <h1 style={{opacity:"0.8"}}>Admin Panel</h1>
            <Dropdown overlay={menu}>
            <Button className="userBtn">user</Button>
            </Dropdown>
        </div>
    )
}
