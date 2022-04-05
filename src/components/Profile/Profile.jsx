import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './Myposts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer

                /*         before context store={props.store}*/
                /*  v2              postsData={props.profilePage.postsData}
                                     newPostText={props.profilePage.newPostText}
                                     dispatch={props.dispatch}*/


                /*                     updateNewPostText={props.updateNewPostText}
                                     addPost={props.addPost}*//>
        </div>
    )
}

export default Profile;