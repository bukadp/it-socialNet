import React from "react";
import preloader from "../../assets/img/preload.gif";


function Preloader(props) {
    return (
        <div style={{backgroundColor: 'black'}}>
            <img src={preloader}/>
        </div>
    )
}


export default Preloader