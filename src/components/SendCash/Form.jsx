import React from 'react';
import { Link } from 'react-router-dom';

const Form = props => {
    const { send, amount, onchangeText, transferFrom, emailTo, password, loading, success, error } = props;
    const mobileMoney = localStorage.getItem("portal-app-userMobileBalance");

    return (
        <React.Fragment>
            <div className="mobile hidden-md hidden-lg m-2">
                <hr />
            </div>

            <div className="col-md-6 col-xs-12 col-sm-7 col-lg-5">

                {error ? <div className="alert alert-danger" style={{ marginTop: 10 }}>{error}</div> : null}
                {success ? <div className="alert alert-success">{success}</div> : null}

                <div className="box box-primary">
                    <div className="box-header with-border">
                        <h3 className="box-title">Transaction Form <i className="fa fa-home"></i></h3>
                    </div>
                    <form onSubmit={send} className="box-body">
                        {mobileMoney === "unlinked" ? (
                            <React.Fragment>
                                <h2>You have not linked your mobile wallet, hence you cannot use this transfer</h2>
                                <br />
                                <Link to="/settings/link-mobile">Link your mobile wallett here</Link>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>

                                <div className="input-group">
                                    <span className="input-group-addon">GH¢</span>
                                    <input type="number" className="form-control" placeholder="Amount you want to send" name="amount" value={amount} onChange={onchangeText} />
                                    <span className="input-group-addon">.00</span>
                                </div>
                                <br />

                                <h4>Account Information <i className="fa fa-user"></i></h4>

                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-credit-card"></i></span>
                                    <select className="form-control" value={transferFrom} onChange={onchangeText} name="transferFrom">
                                        <option value="transfer_from">Transfer from</option>
                                        <option value="mobile">Mobile Wallet</option>
                                        <option value="crypto">Crypto Wallet</option>
                                    </select>
                                </div>
                                <br />

                                {transferFrom === "mobile" ? (
                                    <React.Fragment>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-mobile"></i></span>
                                            <input type="number" className="form-control" placeholder="Mobile Money PIN" name="pin" />
                                        </div>
                                        <br />
                                    </React.Fragment>
                                ) : null}

                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                                    <input type="email" name="emailTo" value={emailTo} onChange={onchangeText} className="form-control" placeholder="Enter receipient's email" />
                                </div>
                                <br />

                                <h4>Confirm Transaction <i className="fa fa-check"></i></h4>

                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                    <input type="password" name="password" value={password} onChange={onchangeText} className="form-control" placeholder="Enter your password to continue" />
                                </div>
                                <br />

                                <button type="submit" className="btn btn-block btn-primary btn-lg">
                                    {loading ? <i className="fa fa-refresh fa-spin"></i> : <React.Fragment><i className="fa fa-send"></i> Send Cash</React.Fragment>}
                                </button>

                            </React.Fragment>
                        )}
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Form;
