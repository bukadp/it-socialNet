import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
        return (
        <div className={classes.item}>
            <img src='http://www.dniprodesign.dp.ua/projects/logo/i/v2/dnipro_logo_31.svg'/>
            {props.message}
            <div>
                <span>like</span>
                {props.likeCount}
            </div>
        </div>

    )
}

export default Post;