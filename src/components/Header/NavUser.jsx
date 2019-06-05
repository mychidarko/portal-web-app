import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from './../../assets/img/avatars/avatar04.png'; 

export default function NavUser(props){
    return (
        <li className="dropdown user user-menu">
            <a href="!" className="dropdown-toggle ajax" data-toggle="dropdown">
                <img src={Avatar} className="user-image" alt="User Pic"/>
                <span className="hidden-xs">Mychi Darko </span>
            </a>
            <ul className="dropdown-menu">
                <li className="user-header">
                    <img src={Avatar} className="img-circle" alt="User Pic" />

                    <p>
                        Mychi Darko
                        <small>Member since Nov. 2018</small>
                    </p>
                </li>
                <li className="user-body">
                    <div className="row">
                        <div className="col-xs-4 text-center">
                            <a href="!" className="ajax">Total Funds(GH¢)</a>
                            <br/> <br/> 
                            GH¢ 0.50
                        </div> 
                        <div className="col-xs-4 text-center">
                            <Link to="/wallet/mobile" className="ajax">Mobile Wallet</Link>
                            <br/> <br/> 
                            GH¢ 0.00
                        </div>
                        <div className="col-xs-4 text-center">
                            <Link to="/wallet/crypto" className="ajax">Crypto Wallet</Link>
                            <br/> <br/> 
                            FLS 10.00
                        </div>
                    </div>
                </li>

                <li className="user-footer">
                    <div className="pull-left">
                        <Link to="/account" className="btn btn-default ajax">Profile</Link>
                    </div>
                    <div className="pull-right">
                        <button onClick={props.onLogout} className="btn btn-default ajax">Sign out</button>
                    </div>
                </li>
            </ul>
        </li>
    );
}