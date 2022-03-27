import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, post: "Hi, how are you?", likeCount: 10},
                {id: 2, post: "It's my first post", likeCount: 10000000000},
                {id: 3, post: "Еееееееееееееееееееее", likeCount: 1},
            ],
            newPostText: "Новый ТЕКСТ ТУТ",
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {
        console.log("Change State")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    /*    addPost() {

            const newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likeCount: 0,
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        },
        updateNewPostText(newText) {
            this._state.profilePage.newPostText = newText;
            this._callSubscriber(this._state);
        },*/

/*
    createMessage() {
        const newMessage = {
            id: 7,
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = "";
        this._callSubscriber(this._state);
    },
    updateNewMessageText(MessageText) {
        this._state.dialogsPage.newMessageText = MessageText;
        this._callSubscriber(this._state);
    },
*/

    dispatch(action) {

        this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action);
        this._state.profilePage = profileReducer (this._state.profilePage, action);
        this._callSubscriber(this._state);
    }
}




export default store;
window.store = store;