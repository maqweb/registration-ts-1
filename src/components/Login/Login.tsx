import React, {ChangeEvent} from 'react';
import '../../App.css';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import s from './Login.module.css'
import {NavLink, Redirect} from "react-router-dom";
import {Dispatch} from "redux";
import {sendDataTC} from "../../redux/loginReducer";

interface IMstp {
    title: string
    email: string
    password: string
    rememberMe: boolean
    isAuth: boolean
}

interface IMdtp {
    sendData: (email: string, password: string, rememberMe: boolean) => void
}

interface IState {
    email: string
    password: string
    rememberMe: boolean
}

class Login extends React.Component<IMstp & IMdtp> {

    state: IState = {
        email: '',
        password: '',
        rememberMe: false
    };

    onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            email: e.currentTarget.value
        })
    };

    onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            password: e.currentTarget.value
        })
    };

    onRememberMe = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            rememberMe: e.currentTarget.checked
        })
    };

    onSendData = () => {
        this.props.sendData(this.state.email, this.state.password, this.state.rememberMe)
    };



    render() {

        if (this.props.isAuth) {
            return <Redirect to={'/profile'}/>
        }

        return (
            <div className={s.login}>

                <h2>{this.props.title}</h2>

                <div>nikolas@gmail.com</div>
                <div>1234567890</div>

                <form className={s.loginForm}>

                    <input value={this.state.email}
                           onChange={this.onChangeEmail}
                           className={s.loginInput} type="text"/>

                    <input value={this.state.password}
                           onChange={this.onChangePassword}
                           className={s.loginInput} type="text"/>

                    <div className={s.remember}>
                        <label>
                            <input onChange={this.onRememberMe}
                                   checked={this.state.rememberMe} type="checkbox"/>Remember me
                        </label>
                        <button onClick={this.onSendData}>Login</button>
                    </div>
                </form>

                <div className={s.links}>
                    <NavLink activeClassName="activeLink" to={'/recovery'}>Forgot password?</NavLink>
                    <NavLink activeClassName="activeLink" to={'/registration'}>Registration</NavLink>
                </div>
                
            </div>
        );
    }
}

const mstp = (state: AppStateType): IMstp => ({
    title: state.login.title,
    email: state.login.email,
    password: state.login.password,
    rememberMe: state.login.rememberMe,
    isAuth: state.profile.isAuth
});

const mdtp = (dispatch: Dispatch): IMdtp => ({
    sendData: (email: string, password: string, rememberMe: boolean) => {
        dispatch(sendDataTC(email, password, rememberMe))
    }
});

const ConnectedLogin = connect(mstp, mdtp)(Login);
export default ConnectedLogin;
