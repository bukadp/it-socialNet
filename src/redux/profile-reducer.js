const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const initialState = {
    postsData: [
        {id: 1, post: "Hi, how are you?", likeCount: 10},
        {id: 2, post: "It's my first post", likeCount: 10000000000},
        {id: 3, post: "Еееееееееееееееееееее", likeCount: 1},
    ],
    newPostText: "Новый ТЕКСТ ТУТ",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5,
                post: state.newPostText,
                likeCount: 0,
            };

            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ""
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})


export default profileReducer;


