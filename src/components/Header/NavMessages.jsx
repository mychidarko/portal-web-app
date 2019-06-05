import React from 'react'
import {
    Link
} from 'react-router-dom'

export default function NavMessages() {
    return (
        <li className="dropdown messages-menu">                    
            <a href="!" className="dropdown-toggle ajax" data-toggle="dropdown">
                <i className="fa fa-envelope-o"></i>
                <span className="label label-success">1</span>
            </a>

            <ul className="dropdown-menu">
                <li className="header">You have 1 message</li>
    
                <li>
                    {/* inner menu: contains the messages */}
                    <ul className="menu">
                        <li>
                            <Link to="!" className="ajax">
                                <div className="pull-left">
                                    <img src="img/logo.png" className="img-circle" alt="User Pic" />
                                </div>
                                <h4>
                                    Portal Online
                                    <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                </h4>
                                <p>Welcome to Portal Online</p>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="footer">
                    <Link to="/messages" className="ajax">See All Messages</Link>
                </li>
            </ul>
        </li>
    );
}