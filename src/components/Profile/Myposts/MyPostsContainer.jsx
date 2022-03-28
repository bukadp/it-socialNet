import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {
    const postsElements = props.postsData.map((post) =>
        <Post message={post.post} likeCount={post.likeCount} key={post.id.toString()}/>
    );

    const newPostElement = React.createRef();

    const addPost = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator());
    };

    function onPostChange() {
        const text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
        // props.updateNewPostText(text);
    }

    return (
        <div className={classes.MyPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                        <textarea onChange={onPostChange}
                                  ref={newPostElement}
                                  value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;