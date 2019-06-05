import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import './pages.css';
import Logo from './../assets/img/logo.png';

// import One from './../assets/img/anotherbg.jpg';
// import Two from './../assets/img/coolbg.jpg';
// import Three from './../assets/img/loginbg.jpg';

export default function Start(props) {
    return props.hasAuth ? <Redirect to="/home" /> :  (
        <StartComponent />
    );
}

function StartComponent() {
    return (
        <div>
            <center>
                <img src={Logo} className="start-logo" alt="start logo" />
            </center>
            <div className="start-slider"></div>
            <center className="start-captions">
                <p className="h1">This is Portal Online</p>
                <p>
                    Secure all your wallets in one place
                </p>
            </center>
            <div className="start-buttons">
                <Link to="/auth/login" className="start-login-btn start-btn btn btn-lg">Log In</Link>
                <Link to="/auth/register" className="start-register-btn start-btn btn btn-lg">Sign Up</Link>
            </div>
        </div>
    );
}