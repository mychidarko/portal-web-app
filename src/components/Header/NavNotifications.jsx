import React from 'react'
import { Link } from 'react-router-dom'

export default function NavNotifications(){
    return (
        <li className="dropdown notifications-menu">
            <a href="!" className="dropdown-toggle ajax" data-toggle="dropdown">
                <i className="fa fa-bell-o"></i>
                <span className="label label-success">1</span>
            </a>
            <ul className="dropdown-menu">
                <li className="header">You have 1 new notification</li>
                <li>
                    <ul className="menu">
                        <li>
                            <Link to="/notifications/id" className="ajax">
                                <i className="fa fa-btc text-aqua"></i> You have recieved 10 Flash for joining Portal
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="footer">
                    <Link to="/notifications" className="ajax">View all</Link>
                </li>
            </ul>
        </li>
    );
}