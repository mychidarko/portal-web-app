import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Form from '../components/SendCash/Form';
import Info from '../components/SendCash/Info';

import './pages.css';

class Send extends Component {
    constructor(props){
        super(props);
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
    const { send, amount, onchangeText, transferFrom, emailTo, password, loading, success, error } = props;  

    return (
        <div className="wrapper">
            <div className="content-wrapper">
                <section className="content-header hidden-xs">
                    <h1>
                        <i className="fa fa-credit-card"></i> Interclient Transfer
                            <small>Send Cash to another user</small>
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
                            <Link to="/interclient" className="ajax">
                                <i className="fa fa-user"></i> Interclient
                                </Link>
                        </li>
                    </ol>
                </section>
                <br />
                <br />
                <section className="content container-fluid bad-bad-container-2">
                    <Info />
                    <Form className="bad-bad-form" send={send} amount={amount} onchangeText={onchangeText} transferFrom={transferFrom} emailTo={emailTo} password={password} loading={loading} success={success} error={error} />
                </section>
            </div>
        </div>
    );
}
 
export default Send;
