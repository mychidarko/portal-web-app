import React from 'react'

const Form = props => {
    // const { interwallet, amount, onchangeText, transferFrom, transferTo, password, loading, success, error } = props;

    return ( 
        <div className="col-md-6 col-xs-12 col-sm-12 col-lg-5">
            <div className="box box-default">
                <div className="box-header with-border">
                    <h3 className="box-title">Transaction Form <i className="fa fa-home"></i></h3>
                </div>
                <form className="box-body">

                    <div className="input-group">
                        <span className="input-group-addon">GH¢</span>
                        <input type="number" className="form-control" placeholder="Amount you want to send"/>
                        <span className="input-group-addon">.00</span>
                    </div>

                    <br />
                    <h4>Account Information <i className="fa fa-user"></i></h4>

                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-credit-card"></i></span>
                        <select name="account-from" className="form-control">
                            <option>Transfer from my</option>
                            <option>Mobile Wallet</option>
                            <option>Crypto Wallet</option>
                        </select>
                    </div>
                    <br/>

                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-credit-card"></i></span>
                        <input type="text" className="form-control" placeholder="Enter the Portal Address of reciepient" data-inputmask='"mask": "99-9-999"' data-mask />
                    </div>
                    <br/>

                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-credit-card"></i></span>
                        <input type="text" className="form-control" placeholder="Confirm Portal Address of reciepient" data-inputmask='"mask": "99-9-999"' data-mask />
                    </div>
                    <br/>

                    <h4>Confirm Transaction <i className="fa fa-check"></i></h4>

                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                        <input type="password" className="form-control" placeholder="Enter your password to continue"/>
                    </div>
                    <br/>

                    <button type="button" className="btn btn-block btn-primary btn-lg">
                        <i className="fa fa-check"></i> Confirm Transfer
                    </button>

                </form>
            </div>
        </div>

     );
}
 
export default Form;
