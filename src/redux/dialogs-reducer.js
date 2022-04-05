const CREATE_MESSAGE = 'CREATE-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const initialState = {
    dialogsData: [
        {id: 1, name: "Eugen"},
        {id: 2, name: "Vlados"},
        {id: 3, name: "Kira"},
        {id: 4, name: "Kirill"},
        {id: 5, name: "Nadya"},
        {id: 6, name: "Mark"},
    ],
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ],
    newMessageText: ".",
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MESSAGE:
            return {
                ...state,
                newMessageText: "",
                messagesData: [...state.messagesData, {
                    id: 7,
                    message: state.newMessageText,
                }],

            };
           case UPDATE_NEW_MESSAGE_TEXT:
               return {
                ...state,
                newMessageText: action.messageText,
            };

        default:
            return state;
    }
}

export const createMessageActionCreator = () => ({type: CREATE_MESSAGE}) //light version of array function, because we have there only return
export const onMessageChangeActionCreator = (textMessage) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    messageText: textMessage,
})

export default dialogsReducer;
