import React from 'react';
import { Link } from 'react-router-dom';

const Expenses = () => {
    return (
      <div style={{ width: "100%" }}>
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
            <ul className="container-fluid" style={{ display: "flex", flexDirection: "column" }}>
              <br/>
              <Expense />
              <br/>
              <Expense />
              <br/>
              <Expense />
              <br/>
              <Expense />
              <br/>
            </ul>
          </div>
          <div className="box-footer text-center bg-red">
            <Link to="/account/expenditure" className="uppercase ajax" style={{ color: 'white' }}>View Expenditure</Link>
          </div>
        </div>
      </div>
    );
}

function Expense() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ flex: 1 }}><i className="fa fa-user fa-2x"></i></div>
        <div style={{ flex: 1 }}><Link to="/account/expenses" style={{ fontSize: 18 }}>Expense</Link></div>
        <div style={{ flex: 10 }}></div>
        <div style={{ flex: 1 }}>Today</div>
      </div>
      <div>
        Category: Food
      </div>
    </div>
  );
}

export default Expenses;