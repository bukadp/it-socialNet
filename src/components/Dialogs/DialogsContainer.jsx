import React from 'react'
import store, {createMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (textMessage) => {
            dispatch(onMessageChangeActionCreator(textMessage));
        },
        createMessage: () => {
            dispatch(createMessageActionCreator());
        }
    }
}

 const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer