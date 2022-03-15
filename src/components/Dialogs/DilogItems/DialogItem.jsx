import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}> {props.name}</NavLink>
        </div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Eugen"},
        {id: 2, name: "Vlados"},
        {id: 3, name: "Kira"},
        {id: 4, name: "Kirill"},
        {id: 5, name: "Nadya"},
        {id: 6, name: "Mark"},
    ]


    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ]

    let dialogsElements = dialogsData.map ( (dialog) =>
        <DialogItem key={dialog.id.toString()} name={dialog.name} id={dialog.id}/>
    )

    let messagesElements = messagesData.map ((message) =>
        <Message message={message.message} id={message.id} key={message.id.toString()}/>
    )

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs