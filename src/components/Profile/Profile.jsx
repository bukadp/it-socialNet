import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './Myposts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";
/*import {addPost} from "../../redux/state";*/

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}/>
        </div>
    )
}

export default Profile;