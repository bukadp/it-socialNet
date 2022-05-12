import axios from "axios";
import {profileAPI, userAPI} from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
    postsData: [
        {id: 1, post: "Hi, how are you?", likeCount: 10},
        {id: 2, post: "It's my first post", likeCount: 10000000000},
        {id: 3, post: "Еееееееееееееееееееее", likeCount: 1},
    ],
    newPostText: "Новый ТЕКСТ ТУТ",
    profile: null,
    status: "",
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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
})
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            });
    }
}


export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}

export const getUserProfile = (userId) => {

    return (dispatch) => {
        userAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}


export default profileReducer;


