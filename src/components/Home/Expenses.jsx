import React from 'react';
import { Link } from 'react-router-dom';

const Expenses = () => {
    return (
            <div className="col-md-4">
              <div className="box box-danger">
                <div className="box-header with-border">
                  <h3 className="box-title">Your Expenditure</h3><br/>
                  <small>Your expenses Today</small>

                  <div className="box-tools pull-right">
                    <span className="label label-danger">11 items</span>
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
                      <i className="fa fa-user"></i>
                      <Link to="/account/expenses" className="users-list-name ajax">Expense</Link>
                      <span className="users-list-date">Today</span>
                    </li>
                    <li>
                      <i className="fa fa-user"></i>
                      <Link to="/account/expenses" className="users-list-name ajax">Expense</Link>
                      <span className="users-list-date">Yesterday</span>
                    </li>
                    <li>
                      <i className="fa fa-user"></i>
                      <Link to="/account/expenses" className="users-list-name ajax">Expense</Link>
                      <span className="users-list-date">
                        date
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-user"></i>
                      <Link to="/account/expenses" className="users-list-name ajax">Expense</Link>
                      <span className="users-list-date">Today</span>
                    </li>
                    <li>
                      <i className="fa fa-user"></i>
                      <Link to="/account/expenses" className="users-list-name ajax">Expense</Link>
                      <span className="users-list-date">Yesterday</span>
                    </li>
                    <li>
                      <i className="fa fa-user"></i>
                      <Link to="/account/expenses" className="users-list-name ajax">Expense</Link>
                      <span className="users-list-date">
                        date
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-user"></i>
                      <Link to="/account/expenses" className="users-list-name ajax">Expense</Link>
                      <span className="users-list-date">
                        date
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-user"></i>
                      <Link to="/account/expenses" className="users-list-name ajax">Expense</Link>
                      <span className="users-list-date">
                        date
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-user"></i>
                      <Link to="/account/expenses" className="users-list-name ajax">Expense</Link>
                      <span className="users-list-date">
                        date
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-user"></i>
                      <Link to="/account/expenses" className="users-list-name ajax">Expense</Link>
                      <span className="users-list-date">
                        date
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-user"></i>
                      <Link to="/account/expenses" className="users-list-name ajax">Expense</Link>
                      <span className="users-list-date">
                        date
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="box-footer text-center bg-red">
                  <Link to="/account/expenditure" className="uppercase ajax" style={{ color: 'white' }}>View Expenditure</Link>
                </div>
              </div>
            </div>
    );
}

export default Expenses;