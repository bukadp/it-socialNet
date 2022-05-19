import React from "react";
import FormikContainer from "../formik/FormikContainer";




function Login(props) {
    return (
        <div>
            <h1>Login</h1>
            <FormikContainer/>
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
