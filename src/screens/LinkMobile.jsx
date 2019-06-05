import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Form from './../components/LinkMobile/Form';
import Info from './../components/LinkMobile/Info';

import './pages.css';

class LinkMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            something: ''
        }
    }
    render() {
        const { mobile, onchangeText, linkMobile, success } = this.props;
        

        return (
            <div className="wrapper">
                <div className="content-wrapper">
                    <section className="content-header hidden-xs">
                        <h1>
                            <i className="fa fa-credit-card"></i> Link Mobile Wallet
                            <small>Add a mobile wallet to make quick transactions with it</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li>
                                <Link to="/home" className="ajax">
                                    <i className="fa fa-home"></i> Home
                                </Link>
                            </li>
                            <li>
                                <a href="." className="ajax">
                                    <i className="fa fa-cogs"></i> settings
                            </a>
                            </li>
                            <li>
                                <Link to="/interclient" className="ajax">
                                    <i className="fa fa-mobile"></i> mobile-link
                                </Link>
                            </li>
                        </ol>
                    </section>
                    <div className="container" style={{ marginTop: 10 }}>
                        {success ? (
                            <div className="alert alert-success">{success} <Link to="/home">Go back Home</Link></div>
                        ) : ""}
                    </div>
                    <br />
                    <br />
                    <section className="content container-fluid bad-bad-container-2">
                        <Info />
                        <Form className="bad-bad-form" mobile={mobile} onChangeText={onchangeText} linkMobile={linkMobile} />
                        <div className="container hidden-md hidden-lg">
                            <h2>How it works</h2>
                            <p>
                                <li>Enter your mobile money number.</li>
                                <li>Enter your mobile money PIN.</li>
                                <li>Confirm.</li>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default LinkMobile;
