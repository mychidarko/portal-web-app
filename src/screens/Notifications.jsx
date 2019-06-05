import React, { Component } from 'react';
import Notification from '../components/Notification';
import SideBar from './../components/Sidebar/index';

import { Redirect } from 'react-router-dom';

class Notifications extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render() { 
        return (
            !this.props.hasAuth ? (
                <Redirect to="/auth/login" />
            ) : (
                <div className="content-wrapper">
                    <section className="content-header hidden-xs">
                        <h1>
                            <i className="fa fa-comment"></i> Notifications
                            <small>information for you</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li>
                                <a href="/home" className="ajax">
                                    <i className="fa fa-home"></i> Home
                                </a>
                            </li>
                            <li><a href="/support" className="ajax"><i className="fa fa-comment"></i> Notifications</a></li>
                        </ol>
                    </section>

                    <section className="content container-fluid">
                        <div className="col-xs-12"><Notification /></div>
                        <div className="col-xs-12"><Notification /></div>
                        <div className="col-xs-12"><Notification /></div>
                        <div className="col-xs-12"><Notification /></div>
                    </section>
                    <SideBar hasAuth={this.props.hasAuth} />
                </div>
            )
        );
    }
}
 
export default Notifications;
