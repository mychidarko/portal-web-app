import React from 'react';

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
                        <dt className="text-primary">Why Link Your Mobile Wallet?</dt>
                        <dd>
                            <p>
                                After linking your mobile wallet, you can send and receive money directly with your mobile wallet from Portal Online.  You can also move money between your crypto and mobile monney wallets without any hustle.
                            </p>
                        </dd>
                        <dt className="text-primary">Why do we need your PIN?</dt>
                        <dd>
                            <p>
                                Since linking your mobile money wallet means that money can be transfered from it, we must confirm that you are the one, and therefore we require your mobile money PIN.
                                <br/>
                                <br/>
                                Not to worry, your PIN code is not stored on our system, it is directly compared with your network provider, and then discarded.
                            </p>
                        </dd>
                    </dl>
                </div>
            </section>
        </div>
     );
}
 
export default Info;