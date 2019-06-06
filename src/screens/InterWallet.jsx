import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Form from '../components/InterWallet/Form';
import Info from '../components/InterWallet/Info';

import './pages.css';

class InterWallet extends Component {
    constructor(){
        super();
        this.state={
            something: ''
        }
    }
    render() { 
        const { hasAuth } = this.props;
        return hasAuth ? <Page {...this.props} /> : <Redirect to="/auth/login" />;
    }
}

function Page(props) {
    const { interwallet, amount, onchangeText, transferFrom, transferTo, password, loading, success, error } = props;

    return (
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
                <br />
                <br />
                <section className="content container-fluid bad-bad-container">
                    <Info />
                    <Form className="bad-bad-form" interwallet={interwallet} amount={amount} onchangeText={onchangeText} transferFrom={transferFrom} transferTo={transferTo} password={password} loading={loading} success={success} error={error} />
                </section>
            </div>
        </div>
    );
}
 
export default InterWallet;
