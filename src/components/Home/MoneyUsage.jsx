import React from 'react';
import { Link } from 'react-router-dom';

const MoneyUsage = () => {
    return ( 
        <div className="row">
        <div className="col-md-12">
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title">Monthly Cashflow Report  - <br /> <Link to="/account/cashflow" className="ajax">View Details</Link></h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                </button>
                <div className="btn-group">
                  <button type="button" className="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-wrench"></i>
                  </button>
                  <ul className="dropdown-menu" role="menu">
                    <li><Link to="!">Action</Link></li>
                    <li><Link to="!">Another action</Link></li>
                    <li><Link to="!">Something else here</Link></li>
                    <li className="divider"></li>
                    <li><Link to="!">Separated link</Link></li>
                  </ul>
                </div>
                <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
              </div>
            </div>
            
            <div className="box-body">
              <div className="row">
                <div className="col-md-*">
                  <span className="text-center">
                    <center>Cashflow: 1 Nov, 2018</center>
                    <h6>
                      <span style={{ border: '1px solid rgb(25, 115, 231)', padding: '3px 10px', borderRadius: '50%', background: 'rgb(25, 115, 231)' }}></span> <span style={{ 
                        marginLeft: 10,
                        marginRight: 25
                       }}>Expenditure</span>
                      <span style={{ border: '1px solid rgb(177, 226, 255)', padding: '3px 10px', borderRadius: '50%', background: 'rgb(177, 221, 247)' }}></span> <span style={{ 
                        marginLeft: 10
                       }}>Income</span>
                    </h6>
                  </span>

                  <div className="container-fluid">
                    <div className="chart">
                      <canvas id="salesChart" style={{ height: 200, width: "100%" }}></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="box-footer">
              <div className="row">
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 0.001%</span>
                    <h5 className="description-header">GH¢ 0.50</h5>
                    <span className="description-text">TOTAL REVENUE</span>
                  </div>
                </div>
                
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-yellow"><i className="fa fa-caret-left"></i> 100%</span>
                    <h5 className="description-header">GH¢ 3521.00</h5>
                    <span className="description-text">TOTAL COST</span>
                  </div>
                </div>
                
                <div className="col-sm-3 col-xs-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 0%</span>
                    <h5 className="description-header">GH¢ 0.00</h5>
                    <span className="description-text">TOTAL PROFIT</span>
                  </div>
                </div>

                <div className="col-sm-3 col-xs-6">
                  <div className="description-block">
                    <span className="description-percentage text-red"><i className="fa fa-caret-down"></i> 18%</span>
                    <h5 className="description-header">GH¢ 0.00</h5>
                    <span className="description-text">SAVINGS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default MoneyUsage;
