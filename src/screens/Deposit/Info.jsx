import React from 'react';
import { Link } from 'react-router-dom';

const Info = () => {
    return ( 
        <div className="col-md-7 hidden-xs col-sm-6 col-lg-7">
            <section className="interwal-info">
                <div className="box-header with-border">
                    <i className="fa fa-exclamation-circle text-primary"></i>

                    <h3 className="box-title text-primary">Important!!</h3>
                </div>
                <div className="box-body">
                    <dl>
                        <dt className="text-primary h3">How to deposit</dt>
                        <dd>
                            <span className="h5">On your real crypto wallet</span>
                            <ol>
                                <li>Enter the amount you want to send.</li>
                                <li>Click send</li>
                                <li>Scan the large <code> QR code </code>or enter the   <code>'Wallet Address'</code> displayed on your   right.</li>
                                <li>Confirm the transaction.</li>
                            </ol>
                        </dd>
                        <br/>
                        <dt className="text-primary h3">NOTE</dt>
                        <dd className="h5">
                            This is the crypto wallet created for you on joining Portal Online. It is a full fledged crypto wallet.
                        </dd>
                        <dd className="h4">
                            Mobile wallet deposits are not allowed on Portal Online, only <Link to="/interwallet">interwallet</Link> transfers are allowed. Mobile deposits have to be made through a registered mobile money vendor.
                        </dd>
                    </dl>
                    <h4 style={{ color: 'red' }}>
                        Your wallet address is changed everytime you logout
                    </h4>
                </div>
            </section>
        </div>
     );
}
 
export default Info;