import React from "react";
import {Input} from "../formik/Input";
import {TextArea} from "./Textarrea";
import {Select} from "./Select";
import {Radiobuttons} from "./Radiobuttons";
import {Checkbox} from "./Checkbox";
import {DatePicker} from "./DatePicker";


function FormikControl(props) {
    const {control, ...rest} = props
    switch (control) {
        case 'input': return <Input {...rest}/>
        case 'textarea': return <TextArea {...rest}/>
        case 'select': return <Select {...rest}/>
        case 'radio': return <Radiobuttons {...rest}/>
        case 'checkbox': return <Checkbox {...rest}/>
        case 'date': return <DatePicker {...rest}/>
        default: return null
    }
}

export default FormikControl

