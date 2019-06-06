import React from 'react';
import { Link } from 'react-router-dom';
import NavMessages from './NavMessages';
import NavNotifications from './NavNotifications';
import NavTasks from './NavTasks';
import NavUser from './NavUser';

import Logo from './../../assets/img/logo.png';

export default function Header(props) {
    const {hasAuth} = props;
    return (
        <React.Fragment>
            <header className="main-header">

                <Link to="/" className="logo ajax">
                    <span className="logo-mini">
                        <img src={Logo} style={{ width: 30, height: 30 }} alt="logo" />
                    </span>
                    <span className="logo-lg">
                        <b>Portal</b> Online
                    </span>
                </Link>

                <nav className="navbar navbar-static-top" role="navigation">
                    {
                        hasAuth ? (
                            <a href="!" className="sidebar-toggle ajax" data-toggle="push-menu" role="button">
                                <span className="sr-only">Toggle navigation</span>
                            </a>
                        ) : ''
                    }


                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            {hasAuth ? (
                                <React.Fragment>
                                    <NavMessages />
                                    <NavNotifications />
                                    <NavTasks />
                                    <NavUser logout={props.logout} />
                                </React.Fragment>
                            ) : (
                                    <React.Fragment>
                                        <li>
                                            <Link to="/auth/login">Login</Link>
                                        </li>
                                        <li>
                                            <Link to="/auth/register">Register</Link>
                                        </li>
                                    </React.Fragment>
                                )}

                            <li>
                                {
                                    hasAuth ? (
                                        <a href="!" data-toggle="control-sidebar">
                                            <i className="fa fa-gears"></i>
                                        </a>
                                    ) : ''
                                }
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </React.Fragment>
    );
}