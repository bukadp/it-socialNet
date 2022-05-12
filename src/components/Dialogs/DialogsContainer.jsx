import React from 'react'
import store, {createMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


/*
let AuthRedirectComponent = withAuthRedirect (Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer*/
