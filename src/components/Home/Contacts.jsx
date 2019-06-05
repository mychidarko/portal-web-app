import React from 'react';
import { Link } from 'react-router-dom'
import Avatar from './../../assets/img/avatars/avatar04.png'; 

export default () => {
    return ( 
        <div className="col-md-4">
              <div className="box box-warning">
                <div className="box-header with-border">
                  <h3 className="box-title">Your Contacts</h3>
                  <br/>
                  <small>Contacts are people you have a transaction history with</small>

                  <div className="box-tools pull-right">
                    <span className="label label-warning">8 Contacts</span>
                    <button type="button" className="btn btn-box-tool" data-widget="collapse">
                        <i className="fa fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-box-tool" data-widget="remove">
                        <i className="fa fa-times"></i>
                    </button>
                  </div>
                </div>
                
                <div className="box-body no-padding">
                  <ul className="users-list clearfix">
                    <li>
                      <img src={Avatar} alt="user dp"/>
                      <a className="users-list-name ajax" href="/contacts/">Alexander Pierce</a>
                      <span className="users-list-date">Today</span>
                    </li>
                    <li>
                      <img src={Avatar} alt="user dp"/>
                      <a className="users-list-name ajax" href="/contacts/">Norman</a>
                      <span className="users-list-date">Yesterday</span>
                    </li>
                    <li>
                      <img src={Avatar} alt="user dp"/>
                      <a className="users-list-name ajax" href="/contacts/">Jane</a>
                      <span className="users-list-date">
                        date
                      </span>
                    </li>
                    <li>
                      <img src={Avatar} alt="user dp"/>
                      <a className="users-list-name ajax" href="/contacts/">John</a>
                      <span className="users-list-date">
                        date
                      </span>
                    </li>
                    <li>
                      <img src={Avatar} alt="user dp" />
                      <a className="users-list-name ajax" href="/contacts/">Alexander</a>
                      <span className="users-list-date">
                        date
                      </span>
                    </li>
                    <li>
                      <img src={Avatar} alt="user dp"/>
                      <a className="users-list-name ajax" href="/contacts/">Sarah</a>
                      <span className="users-list-date">
                        date
                      </span>
                    </li>
                    <li>
                      <img src={Avatar} alt="user dp"/>
                      <a className="users-list-name ajax" href="/contacts/">Nora</a>
                      <span className="users-list-date">
                        date
                      </span>
                    </li>
                    <li>
                      <img src={Avatar} alt="User dp" />
                      <Link className="users-list-name ajax" to="/contacts/">Nadia</Link>
                      <span className="users-list-date">
                        date
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="box-footer text-center bg-yellow">
                  <Link to="/contacts/all" className="uppercase ajax" style={{ color: 'white' }}>View All Contacts</Link>
                </div>
              </div>
            </div>
    );
}