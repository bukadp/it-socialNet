import React from "react";
import c from '../formik/FormikContainerLigin.module.css'
import {Field, ErrorMessage} from "formik";
import TextError from "../formik/TextError";

export function Select(props) {
    const {label, name, options, ...rest} = props
    return (
        <div className={c.form_control}>
            <label htmlFor={name}>{label}</label>
            <Field as='select' id={name} name={name} {...rest}>
                {
                    options.map(option => {
                            return (
                                <option
                                    key={option.value}
                                    value={option.value}
                                >{option.key}</option>
                            )
                        }
                    )
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )

}
