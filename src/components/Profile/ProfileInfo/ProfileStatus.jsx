import React from 'react'
import classes from './ProfileInfo.module.css'


const ProfileStatus = (props) => {

    return (
        <div>
            {/*            <div>
                <img
                    src={coverImage}/>
            </div>*/}
            <div className={classes.description_block}>
                <img src={props.profile.photos.large}/>
            </div>
            <ProfileStatus />
            <div>
                {props.profile.aboutMe}
            </div>
        </div>
    )
}

export default ProfileStatus;