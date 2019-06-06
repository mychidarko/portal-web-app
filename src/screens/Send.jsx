import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SideBar from './../components/Sidebar/index';

import Form from '../components/SendCash/Form';
import Info from '../components/SendCash/Info';
import Footer from '../components/Footer';

import './pages.css';

class Send extends Component {
    constructor(props){
        super(props);
        this.state={
            something: ''
        }
    }
    render() { 
        const { send, amount, onchangeText, transferFrom, transferTo, password, loading, success, error } = this.props;  

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
                    <br/>
                    <br/>
                    <section className="content container-fluid bad-bad-container-2">
                        <Info />
                        <Form className="bad-bad-form" send={send} amount={amount} onchangeText={onchangeText} transferFrom={transferFrom} transferTo={transferTo} password={password} loading={loading} success={success} error={error} />
                    </section>
                </div>
                <Footer/>
                <SideBar hasAuth={this.props.hasAuth} />
            </div>
        );
    }
}
 
export default Send;
