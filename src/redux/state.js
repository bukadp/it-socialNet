function renderEntireTree() {
    console.log("Change State")
}

let state = {
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
        newMessageText: "New message from state!!!",
    },
}

export function addPost() {

    const newPost = {
        id: 5,
        post: state.profilePage.newPostText,
        likeCount: 0,
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = "";
    renderEntireTree();
}

export function updateNewPostText(newText) {
    state.profilePage.newPostText = newText;
    renderEntireTree();
}

export function subscribe(observer) {
    renderEntireTree = observer;
}

export function createMessage() {
    const newMessage = {
        id: 7,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.newMessageText = "";
    renderEntireTree();
}

export function updateNewMessageText(MessageText) {
    state.dialogsPage.newMessageText = MessageText;
    renderEntireTree();
}


export default state