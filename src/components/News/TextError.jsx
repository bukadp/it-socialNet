import React from "react";
import c from './News.module.css'

function TextError(props) {
    return (
        <div className={c.error}>
            {props.children}
        </div>
    )
}

export default TextError