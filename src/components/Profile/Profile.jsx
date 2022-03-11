import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './Myposts/MyPosts.jsx'

const Profile = () => {
    return (
        <div>
            <div className={classes.Content_cover}>
                cover
            </div>
            <div>
                ava+desc
            </div>
        <MyPosts />
        </div>
    )
}

export default Profile;