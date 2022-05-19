import React from "react";
import c from '../formik/FormikContainerLigin.module.css'
import {Field, ErrorMessage} from "formik";
import TextError from "../formik/TextError";

export function TextArea(props) {
    const {label, name, ...rest} = props
    return (
        <div className={c.form_control}>
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )

}
