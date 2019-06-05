import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import Logo from './../../assets/img/logo.png';
import  "./auth.css";

export default function Login(props) {
    const { email, password, error, login, loading, hasAuth, emailError, passwordError, onchangeText} = props;
        
    return  hasAuth ? (
            <Redirect to="/home" />
        ) : (
            <div className="login-box">
                { error ? <div className="alert alert-danger">{error}</div> : null }

                <div className="login-box-body">
                    <center>
                        <img src={Logo} className="login-page-logo" alt="Logo" />
                    </center>

                    <form onSubmit={login}>
                        <div className="form-group has-feedback">
                            <input type="email" name="email" className="form-control" id={emailError.length > 0 ? 'inputWarning' : 'username'} placeholder="Email" value={email} onChange={onchangeText} />
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                            <span className="help-block">{emailError}</span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" name="password" className="form-control" id={passwordError.length > 0 ? 'inputWarning' : 'password'} placeholder="Password" value={password} onChange={onchangeText} />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                            <span className="help-block">{passwordError}</span>
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                                <div className="checkbox icheck">
                                    <label style={{ marginLeft: 24 }}>
                                        <input type="checkbox"/> Remember Me
                                    </label>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">{loading ? "Loading" : "Sign In"}</button>
                            </div>
                        </div>
                    </form>

                    <div className="social-auth-links text-center">
                        <p>- OR -</p>
                        
                        
                        <a href="https://accounts.google.com/" className="btn btn-block btn-social btn-google btn-flat">
                            <i className="fa fa-google-plus"></i> Sign in with Google
                        </a>
                    </div>

                    <center className="center">
                        <Link to="/auth/forgot-password" className="text-center">I forgot my password</Link><br />
                        <Link to="/auth/register" className="text-center">I don't have an account</Link>
                    </center>
                </div>
            </div>
    );
}