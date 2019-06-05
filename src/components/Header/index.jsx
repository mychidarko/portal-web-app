import React from 'react';
import { Link } from 'react-router-dom';
import NavMessages from './NavMessages';
import NavNotifications from './NavNotifications';
import NavTasks from './NavTasks';
import NavUser from './NavUser';

import Logo from './../../assets/img/logo.png';

class DisplayConn extends React.Component {
    state = {
        hidden: ''
    }
    
    componentDidMount() {
        setTimeout(() => { this.setState({ hidden: 'hidden' }) }, 7000)
    }

    render() {
        return navigator.onLine ? '' : (
            <div className={'header box '+ this.state.hidden} style={{ background: 'black', borderRadius: 0, marginTop: -3}}>
                <center style={{ color: 'white' }}>
                    <span className="fa fa-circle text-danger"></span>&nbsp; &nbsp; 
                    Portal Online is Offline 
                    <div className="box-tools pull-right">
                        <button type="button" className="btn btn-box-tool pull-right" style={{ marginTop: -6 }} data-widget="remove">
                            <i className="fa fa-times" style={{ fontSize: 16, color: 'white' }}></i>
                        </button>
                    </div>
                </center>
            </div>
        )
    }
    
}

export default function Header(props) {
    const {hasAuth, onLogout} = props;
    return (
        <React.Fragment>
            <header className="main-header">

                <Link to="/" className="logo ajax">
                    <span className="logo-mini">
                        <img src={Logo} style={{ width: 30, height: 30 }} alt="logo" />
                    </span>
                    <span className="logo-lg">
                        <img src={Logo} style={{ width: 30, height: 30 }} alt="logo" /> <b>Portal</b> Online
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
                                    <NavUser onLogout={onLogout} />
                                </React.Fragment>
                            ) : (
                                    <React.Fragment>
                                        <li>
                                            <Link to="/login">Login</Link>
                                        </li>
                                        <li>
                                            <Link to="/register">Register</Link>
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
                <DisplayConn />
            </header>
        </React.Fragment>
    );
}