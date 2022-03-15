import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './Myposts/MyPosts.jsx'

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <div>
                <img src='https://24tv.ua/resources/photos/news/202009/1412263.jpg?v=1637318367000&w=1200&h=675&fit=cover&q=50'/>
            </div>
            <div>
                ava+desc
            </div>
        <MyPosts />
        </div>
    )
}

export default Profile;