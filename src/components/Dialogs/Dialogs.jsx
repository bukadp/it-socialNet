import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DilogItems/DialogItem";
import Message from "./Message/Message";


const CreateMessage = (props) => {
    const createMessageElement = React.createRef();

    const createMessage = () => {
        props.createMessage();
    }

    function onMessageChange() {
        const textMessage = createMessageElement.current.value;
        props.updateNewMessageText(textMessage);
    }

    return (
        <div>
            <div>
                <textarea ref={createMessageElement}
                          onChange={onMessageChange}
                          value={props.newMessageText}/>
            </div>
            <div>
                <button onClick={createMessage}>Add post</button>
            </div>
        </div>
    )

}


const Dialogs = (props) => {

    let dialogsElements = props.localState.dialogsData.map((dialog) =>
        <DialogItem key={dialog.id.toString()} name={dialog.name} id={dialog.id}/>
    )

    let messagesElements = props.localState.messagesData.map((message) =>
        <Message message={message.message} id={message.id} key={message.id.toString()}/>
    )

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
                <div><CreateMessage updateNewMessageText={props.updateNewMessageText}
                                    createMessage={props.createMessage}
                                    newMessageText={props.localState.newMessageText} /></div>
            </div>

        </div>
    )
}

export default Dialogs