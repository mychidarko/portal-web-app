import React from 'react'
import { Link } from 'react-router-dom'

const InfoBoxes = () => {
    return ( 
        <React.Fragment>
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-aqua">
                            GH¢
                        </span>
                        
                        <div className="info-box-content">
                            <span className="info-box-text">Total Funds</span>
                            <span className="info-box-number">GH¢ <small>0.50</small></span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-red">
                            <i className="fa fa-mobile-phone"></i>
                        </span>

                        <div className="info-box-content">
                            <span className="info-box-text">Mobile Wallet</span>
                            <span className="info-box-number">GH¢ <small>0.00</small></span>
                        </div>
                    </div>
                </div>

                <div className="clearfix visible-sm-block"></div>

                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="info-box">
                    <span className="info-box-icon bg-green">
                        <i className="fa fa-btc"></i>
                    </span>

                    <div className="info-box-content">
                      <span className="info-box-text">Crypto Wallet</span>
                      <span className="info-box-number">FLASH <small>10.00</small></span>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box">
                        <span className="info-box-icon bg-yellow">
                            <Link to="/deposit">
                                <i className="ion ion-ios-plus" style={{ color: 'white' }}></i>
                            </Link>
                        </span>

                        <div className="info-box-content">
                            <span className="info-box-text">Deposit</span>
                            <span className="info-box-number">
                                <small>Click to deposit cash</small>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
     );
}
 
export default InfoBoxes;
