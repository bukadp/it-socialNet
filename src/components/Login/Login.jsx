import React from "react";
import c from './Ligin.module.css'
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup'


const initialValues = {
    name: '',
    email: '',
    channel: '',
}

const onSubmit = values => {
    console.log('Form data', values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required'),
})

function LoginForm(props) {

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className={c.form_control}>
                    <label htmlFor='name'>Name</label>
                    <Field type='text'
                           id='name'
                           name='name'
                    />
                    <ErrorMessage name='name'/>
                </div>
                <div className={c.form_control}>
                    <label htmlFor='channel'>Password</label>
                    <Field type='text'
                           id='channel'
                           name='channel'
                    />
                    <ErrorMessage name='channel'/>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}


function Login(props) {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    )
}

export default Login
















/*


function LoginForm(props) {
    return (
        <form>
            <div>
                <input placeholder={'Login'}/>
            </div>
            <div>
                <input placeholder={'Password'}/>
            </div>
            <div>
                <input type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}





function Login(props) {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    )
}

export default Login
*/
