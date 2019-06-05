import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './../../assets/img/avatars/avatar04.png'; 

const RequestCash = () => {
    return ( 
        <div className="col-md-4">
          <div className="box box-primary direct-chat direct-chat-primary">
            <div className="box-header with-border">
              <h3 className="box-title">Request Cash</h3><br/>
                <small>You can request cash from your contacts</small>

              <div className="box-tools pull-right">
                <span data-toggle="tooltip" title="4 New Alerts" className="badge bg-light-blue">4</span>
                <button type="button" className="btn btn-box-tool" data-widget="collapse">
                    <i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove">
                    <i className="fa fa-times"></i>
                </button>
              </div>
            </div>
            <div className="box-body">
              <div className="direct-chat-messages" style={{ padding: '1%' }}>
                <div className="bg-light-blue">
                <ul className="contacts-list">
                  <li>
                    <Link to="!">
                      <img className="contacts-list-img" src={Avatar} alt="User Profile"/>

                      <div className="contacts-list-info">
                            <span className="contacts-list-name">
                              Sebastian Livingstone
                              <small className="contacts-list-date pull-right">2/28/2015</small>
                            </span>
                        <span className="contacts-list-msg">
                            Request Accepted. You hav recei...
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="!">
                      <img className="contacts-list-img" src={Avatar} alt="User Profile"/>

                      <div className="contacts-list-info">
                            <span className="contacts-list-name">
                              Edewilly Edwards
                              <small className="contacts-list-date pull-right">2/28/2015</small>
                            </span>
                        <span className="contacts-list-msg">Not enough funds to accept your...</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="!">
                      <img className="contacts-list-img" src={Avatar} alt="User Profile"/>

                      <div className="contacts-list-info">
                            <span className="contacts-list-name">
                              Spidey Alive
                              <small className="contacts-list-date pull-right">2/28/2015</small>
                            </span>
                        <span className="contacts-list-msg">Request Rejected.</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="!">
                      <img className="contacts-list-img" src={Avatar} alt="User Profile"/>

                      <div className="contacts-list-info">
                            <span className="contacts-list-name">
                              Nadia
                              <small className="contacts-list-date pull-right">2/28/2015</small>
                            </span>
                        <span className="contacts-list-msg">Request sent for GH¢ 1150.00.</span>
                      </div>
                    </Link>
                  </li>

                </ul>
              </div>
              </div>
                { /*Contacts are loaded here*/ } 
            </div>
          </div>
        </div>
     );
}
 
export default RequestCash;