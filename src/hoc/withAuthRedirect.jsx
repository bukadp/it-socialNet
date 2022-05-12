import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export function withAuthRedirect(Component) {
    function RedirectComponent(props) {
        if (!props.isAuth) return <Navigate to='/login'/>;
        return <Component {...props}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent;
}

/*export function withAuthRedirect(Component) {
    class RedirectComponent extends React.Component{
        render() {
            if (!this.props.isAuth) return <Navigate to='/login'/>

            return<Component {...this.props}/>
        }
    }
    return RedirectComponent;
}*/