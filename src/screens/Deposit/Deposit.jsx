import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import Info from './Info';
import Form from './Form';

import Footer from '../../components/Footer';

import './../pages.css';


class Deposit extends React.Component {
    constructor(){
        super();
        this.state={
            something: ''
        }
    }
    render() { 
        return (
            !this.props.hasAuth ? (
                <Redirect to="/auth/login" />
            ) : (
                <div className="wrapper">
                    <div className="content-wrapper">
                        <section className="content-header hidden-xs">
                            <h1>
                                <i className="fa fa-money"></i> Deposit
                                <small>add money to your crypto account</small>
                            </h1>
                            <ol className="breadcrumb">
                                <li>
                                    <Link to="/home" className="ajax">
                                        <i className="fa fa-home"></i> Home
                                    </Link>
                                </li>
                                <li>
                                    <a href="." className="ajax">
                                        <i className="fa fa-user"></i> account
                                    </a>
                                </li>
                                <li>
                                    <Link to="/deposit" className="ajax">
                                        <i className="fa fa-money"></i> Deposit
                                    </Link>
                                </li>
                            </ol>
                        </section>
                        <br/>
                        <br/>
                        <section className="content container-fluid bad-bad-container-2">
                            <Info />
                            <Form className="bad-bad-form" address="G7HPvOdnznNqLnikY0o0OX5EgSbXy7Ol2oAoopeIOtUQR81KNQSs2sFIOXYK" />
                            <div className="container hidden-md hidden-lg">
                                <h2>How to deposit</h2>
                                <p>
                                    A deposit can only be made with your crypto wallet.
                                    <br />
                                    <span className="h5">On your external crypto wallet</span>
                                    <li>Enter the amount you want to send.</li>
                                    <li>Click send</li>
                                    <li>Scan the large <code> QR code </code>or enter the   <code>'Wallet Address'</code> displayed above.</li>
                                    <li>Confirm the transaction.</li>
                                </p>
                            </div>
                        </section>
                    </div>
                    <Footer />
                </div>
            )
        );
    }
}
 
export default Deposit;