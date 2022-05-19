import React from "react";
import c from '../formik/FormikContainerLigin.module.css'
import {Field, ErrorMessage} from "formik";
import TextError from "../formik/TextError";

export function Checkbox(props) {
    const {label, name, options, ...rest} = props
    return (
        <div className={c.form_control}>
            <label>{label}</label>
            <Field as='select' name={name} {...rest}>
                {({ field }) => {
                    return options.map(option => {
                        return (
                            <React.Fragment key={option.key}>
                                <input
                                    type='checkbox'
                                    id={option.value}
                                    {...field}

                                    value={option.value}
                                    checked={field.value.includes(option.value)}
                                />
                                <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>
                        )
                    })
                }}
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )

}
