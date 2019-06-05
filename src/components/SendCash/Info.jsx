import React from 'react';
import { Link } from 'react-router-dom';

const Info = () => {
    return ( 
        <div className="col-md-6 hidden-xs col-sm-12 col-lg-7">
            <section className="interwal-info">
                <div className="box-header with-border">
                    <i className="fa fa-exclamation-circle text-primary"></i>

                    <h3 className="box-title text-primary">Important!!</h3>
                </div>
        
                <div className="box-body">
                    <dl>
                        <dt className="text-primary">What is the Interclient Transfer?</dt>
                        <dd>
                            <p>
                                Interclient transfer is a transfer type used to send money to another user or client. <br/>Eg:<code> Sending money from <span className="text-warning">my crypto wallet</span> to Seth.</code>
                            </p>
                        </dd>
                        <dt className="text-primary">How to use it</dt>
                        <dd>
                            <ol>
                                <li>Enter the amount you want to send.</li>
                                <li>Select the wallet type you want to transfer the money from.</li>
                                <li>Enter the '<code>Portal Address</code>' of the user you want to send money to.</li>
                                <li>Confirm the <code>Portal Address</code> of the  user.</li>
                                <li>Enter your password.</li>
                                <li>Confirm the transfer.</li>
                            </ol>
                        </dd>
                        <br/>
                        <dt className="text-primary">
                            <i className="fa fa-exclamation-circle"></i> NOTE
                        </dt>
                        <dd>You can't use this transfer to move money to another wallet type.</dd>
                        <dd>
                            <code>
                                A Portal Address is the simple 6 digit number assigned to every Portal user.
                                <br/>
                                It has the form <span className="text-warning">P-XX-X-XXX</span>
                            </code>
                        </dd>
                    </dl>
                    <br/>
                    <Link to="/interwallet" className="text-primary h3">Switch to interwallet transfer</Link>
                </div>
            </section>
        </div>
     );
}
 
export default Info;