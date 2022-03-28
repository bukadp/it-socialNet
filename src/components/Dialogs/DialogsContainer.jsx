import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DilogItems/DialogItem";
import Message from "./Message/Message";
import store, {createMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";




const CreateMessage = (props) => {
    //const createMessageElement = React.createRef();

    const createMessage = () => {
        props.dispatch(createMessageActionCreator());
    }


    function onMessageChange(e) {
        const textMessage = e.target.value
        //const textMessage = createMessageElement.current.value;
        const action = onMessageChangeActionCreator(textMessage);
        props.dispatch(action);
    }

    return (
        <div>
            <div>
                <textarea
                          onChange={onMessageChange}
                          value={props.newMessageText}
                placeholder="Тут пишите текст"/>
            </div>
            <div>
                <button onClick={createMessage}>Add post</button>
            </div>
        </div>
    )

}


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;


    let dialogsElements = state.dialogsData.map((dialog) =>
        <DialogItem key={dialog.id.toString()} name={dialog.name}/>
    )

    let messagesElements = state.messagesData.map((message) =>
        <Message message={message.message} key={message.id.toString()}/>
    )

    const createMessage = () => {
        props.store.dispatch(createMessageActionCreator());
    }


    function onMessageChange(e) {
        const textMessage = e.target.value
        //const textMessage = createMessageElement.current.value;
        const action = onMessageChangeActionCreator(textMessage);
        props.store.dispatch(action);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
                {/*<div><CreateMessage dispatch={props.store.dispatch}
                                                       updateNewMessageText={props.updateNewMessageText}
                                                        createMessage={props.createMessage}

                                    newMessageText={state.newMessageText}/></div>*/}


                <div>
                    <div>
                <textarea
                    onChange={onMessageChange}
                    value={state.newMessageText}
                    placeholder="Тут пишите текст"/>
                    </div>
                    <div>
                        <button onClick={createMessage}>Add post</button>
                    </div>
                </div>

            </div>













        </div>
    )
}

export default Dialogs