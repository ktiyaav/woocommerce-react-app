/* eslint-disable react/react-in-jsx-scope */
import React,{Component} from 'react';
import {LoginButton} from '../components/Authentication/Auth0LoginButton';
class Login extends Component{
    render(){
        return(
            <>
            <LoginButton></LoginButton>
            </>
        );
    }
}

export default Login;