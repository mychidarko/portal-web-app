import React from 'react';
import { Link } from 'react-router-dom';

const Info = () => {
    return ( 
        <div className="col-md-6 hidden-xs col-sm-5 col-lg-7">
            <section className="interwal-info">
                <div className="box-header with-border">
                    <i className="fa fa-exclamation-circle text-primary"></i>

                    <h3 className="box-title text-primary">Important!!</h3>
                </div>
                
                <div className="box-body">
                    <dl>
                    <dt className="text-primary">What is the Interwallet Transfer?</dt>
                    <dd>
                        <p>
                            Interwallet transfer is a transfer type used to move money from one account type to another. 
                            <br/>
                            Eg:<code> Mobile wallet to Crypto Wallet.</code>
                        </p>
                    </dd>
                    <dt className="text-primary">How to use it</dt>
                    <dd>
                        <ol>
                            <li>Enter the amount you want to send.</li>
                            <li>Select the wallet type you want to transfer the money from.</li>
                            <li>Select the wallet type you want to transfer the money to.</li>
                            <li>Enter your password.</li>
                            <li>Confirm the transfer.</li>
                        </ol>
                    </dd>
                    <br/>
                    <dt className="text-primary">
                        <i className="fa fa-exclamation-circle"></i> NOTE
                    </dt>
                    <dd>
                        You can't use this transfer to send money to another account or another user.
                    </dd>
                    </dl>
                    <Link to="/send" className="text-primary h3">
                        Switch to interclient transfer
                    </Link>
                </div>
            </section>
        </div>
     );
}
 
export default Info;