import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return{
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;



/*const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
            (store) => {
                const state = store.getState();


                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                function onPostChange(text) {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action)
                }
             return (<MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    postsData={state.profilePage.postsData}
                    newPostText={state.profilePage.newPostText}
                />)
            }}
        </StoreContext.Consumer>
    )
};*/