import React from 'react'
import { Link } from 'react-router-dom'

export default function NavTasks(){
    return (
        <li className="dropdown tasks-menu">
            <a href="!" className="dropdown-toggle ajax" data-toggle="dropdown">
                <i className="fa fa-flag-o"></i>
                <span className="label label-success">1</span>
            </a>
            <ul className="dropdown-menu">
                <li className="header">You have 1 new transaction</li>
                <li>
                    <ul className="menu">
                        <li>
                            <Link to="/transactions/id" className="ajax">
                                <h3>
                                    10 Flash from Portal
                                    <small className="pull-right">100%</small>
                                </h3>
                                <div className="progress xs">
                                    <div className="progress-bar progress-bar-success" style={{ width: '100%' }} role="progressbar"
                                        aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                    <span className="sr-only">100% Complete</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="footer">
                    <Link to="/transactions" className="ajax">View all Transactions</Link>
                </li>
            </ul>
        </li>
    );
}