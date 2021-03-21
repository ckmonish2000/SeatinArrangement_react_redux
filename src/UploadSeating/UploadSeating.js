import React from 'react'
import Header from './header'
import Modal from './Modal'


export default function UploadSeating(props) {
    var user=props.location.state?.TID
    return (
        <div>
            <Header user={user} />
            <Modal/>
        </div>
    )
}
