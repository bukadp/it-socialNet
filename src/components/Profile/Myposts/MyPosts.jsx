import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div className={classes.MyPosts}>
                My posts
                <div>
                    <textarea>TEXT OF POST</textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={classes.posts}>
                    <Post message='Hi, how are you?' likeCount="10"/>
                    <Post message="It's my first post" likeCount="1000000"/>
                </div>
            </div>
    )
}

export default MyPosts;