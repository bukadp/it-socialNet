import React from "react";
import {Field, reduxForm} from "redux-form";

function LoginForm(props) {
    return (
        <form>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

function Login(props) {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm/>
        </div>
    )
}

export default Login


/*

function LoginForm(props) {

    const initialValues = {
        name: '',
        password: '',
        rememberMe: true,
    }


    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
    })

    const onSubmit = values => {
        console.log('Form data', values)
    }

    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={formik.onSubmit}>
            {
                formik => {
                    return <Form>
                        <FormikControl
                            control='input'
                            type='text'
                            label='Name'
                            name='name'
                        />
                        <FormikControl
                            control='input'
                            type='password'
                            label='Password'
                            name='password'
                        />
                        <label>
                            <Field type="checkbox" name="toggle" />
                            remember me
                        </label>

                        <button type='submit' onSubmit={onSubmit}
                                disabled={!formik.isValid || formik.isSubmitting}
                        >Submit</button>
                    </Form>
                }
            }
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
*/
