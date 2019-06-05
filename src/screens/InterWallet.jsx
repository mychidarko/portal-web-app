import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import SideBar from './../components/Sidebar/index';

import Form from '../components/InterWallet/Form';
import Info from '../components/InterWallet/Info';
import Footer from '../components/Footer';

import './pages.css';

class InterWallet extends Component {
    constructor(){
        super();
        this.state={
            something: ''
        }
    }
    render() { 
        return (
            !this.props.hasAuth ? (
                <Redirect to="/login" />
            ) : (
                <div className="wrapper">
                    <div className="content-wrapper">
                        <section className="content-header hidden-xs">
                            <h1>
                                <i className="fa fa-credit-card"></i> Interwallet Transfer
                                <small>Move money to another wallet type</small>
                            </h1>
                            <ol className="breadcrumb">
                                <li>
                                    <Link to="/home" className="ajax">
                                        <i className="fa fa-home"></i> Home
                                    </Link>
                                </li>
                                <li>
                                    <a href="." className="ajax">
                                        <i className="fa fa-money"></i> Transactions
                                    </a>
                                </li>
                                <li>
                                    <Link to="/interwallet" className="ajax">
                                        <i className="fa fa-user"></i> Interwallet
                                    </Link>
                                </li>
                            </ol>
                        </section>
                        <br/>
                        <br/>
                        <section className="content container-fluid bad-bad-container">
                            <Info />
                            <Form className="bad-bad-form" />
                            <div className="container hidden-md hidden-lg">
                                <h2>How it works</h2>
                                <p>
                                    <li>Enter the amount you want to send.</li>
                                    <li>Select the wallet type you want to transfer the money from.</li>
                                    <li>Select the wallet type you want to transfer the money to.</li>
                                    <li>Enter your password.</li>
                                    <li>Confirm the transfer.</li>
                                </p>
                            </div>
                        </section>
                    </div>
                    <Footer />
                    <SideBar hasAuth={this.props.hasAuth} />
                </div>
            )
        );
    }
}
 
export default InterWallet;
