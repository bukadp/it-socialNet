import React from 'react'
import classes from './ProfileInfo.module.css'
import coverImage from "../../../1618769251_51-funart_pro-p-dnepropetrovsk-ukraina-krasivie-mesta-foto-54.jpg"
import Preloader from "../../common/Preloader";
import Post from "../Myposts/Post/Post";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
{/*            <div>
                <img
                    src={coverImage}/>
            </div>*/}
            <div className={classes.description_block}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
<div>
    {props.profile.aboutMe}
</div>
        </div>
    )
}

export default ProfileInfo;