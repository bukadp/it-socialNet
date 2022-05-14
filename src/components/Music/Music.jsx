import React from 'react'
import c from './Music.module.css'
import {useFormik} from "formik";
import * as Yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    channel: '',
}

const onSubmit = values => {
    console.log('Form data', values)
}

const validate = values => {

    let errors = {}
    if (!values.name) {
        errors.name = 'Required'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }

    if (!values.channel) {
        errors.channel = 'Required'
    }
    return errors
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required'),
})

function MusicForm(props) {
    const formik = useFormik({
        initialValues,
        onSubmit,
       // validate,
        validationSchema,
    })
    //console.log('Formik values', formik.values)
    console.log('Visited fields', formik.touched)

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={c.form_control}>
                <label htmlFor='name'>Name</label>
                <input type='text'
                       id='name'
                       name='name'
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.name}/>
                {formik.touched.name && formik.errors.name ? <div className={c.error}>{formik.errors.name}</div> : null}
            </div>
            <div className={c.form_control}>
                <label htmlFor='email'>E-mail</label>
                <input type='email'
                       id='email'
                       name='email'
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.email}/>
                {formik.touched.email && formik.errors.email ? <div className={c.error}>{formik.errors.email}</div> : null}
            </div>
            <div className={c.form_control}>
                <label htmlFor='channel'>Channel</label>
                <input type='text'
                       id='channel'
                       name='channel'
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.channel}/>
                {formik.touched.channel && formik.errors.channel ? <div className={c.error}>{formik.errors.channel}</div> : null}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}


function Music(props) {
    return (
        <div>
            <h1>Music</h1>
            <MusicForm/>
        </div>
    )
}

export default Music

