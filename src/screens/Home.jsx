import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import SideBar from './../components/Sidebar/index';

import InfoBoxes from './../components/Home/InfoBoxes';
import MoneyUsage from '../components/Home/MoneyUsage';
import Expenses from './../components/Home/Expenses';
import Contacts from '../components/Home/Contacts';
import RequestCash from '../components/Home/RequestCash';
import News from '../components/Home/News';
import Footer from './../components/Footer';

const Home = (props) => {

    return (
        !props.hasAuth ? (
            <Redirect to="/auth/login" />
        ) : (
            <div className="wrapper">
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Home
                            <small>HomePage</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li className="active">
                                <Link to="/home"><i className="fa fa-home"></i> Home</Link>
                            </li>
                        </ol>
                    </section>

                    <section className="content container-fluid">
                        <InfoBoxes />
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-6 col-xs-12">
                                <MoneyUsage />
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <Contacts />
                            </div>
                        </div>
                        
                        <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <Expenses />
                                </div>
                        </div>
                        <br/>
                        <News />
                    </section>
                </div>
                <Footer />
                <SideBar hasAuth={props.hasAuth} />
            </div>
        )
    );
}
 
export default Home;
