import React from 'react'
import { Link } from 'react-router-dom'

const InfoBoxes = (props) => {
    const totalFunds = localStorage.getItem("portal-app-userBalance");
    const mobileFunds = localStorage.getItem("portal-app-userMobileBalance");
    const cryptoFunds = localStorage.getItem("portal-app-userCryptoBalance");

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
                            <span className="info-box-number">GH¢ <small>{totalFunds}</small></span>
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
                            <span className="info-box-number">
                                {mobileFunds === "unlinked" ? (
                                    <small><Link to="/settings/link-mobile" style={{ color: "black" }}>click to add mobile wallet</Link></small>
                                ) : <React.Fragment>GH¢ <small>{mobileFunds}</small></React.Fragment>}
                            </span>
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
                      <span className="info-box-number">FLASH <small>{cryptoFunds}</small></span>
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
