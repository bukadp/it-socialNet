import React from 'react'
import classes from './ProfileInfo.module.css'
import coverImage from "../../../1618769251_51-funart_pro-p-dnepropetrovsk-ukraina-krasivie-mesta-foto-54.jpg"


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={coverImage}/>
            </div>
            <div className={classes.description_block}>
                ava+desc
            </div>
        </div>
    )
}

export default ProfileInfo;