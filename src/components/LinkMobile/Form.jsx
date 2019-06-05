import React from 'react'

const Form = (props) => {
    const { mobile, onChangeText, linkMobile, pin } = props;
    

    return ( 
        <div className="col-md-6 col-xs-12 col-sm-12 col-lg-5">
            <div className="box box-default">
                <div className="box-header with-border">
                    <h3 className="box-title">Link Your Mobile Wallet &nbsp; &nbsp; <i className="fa fa-share"></i></h3>
                </div>
                <form className="box-body" onSubmit={linkMobile}>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-mobile"></i></span>
                        <input type="number" className="form-control" value={mobile} name="mobile" onChange={onChangeText} placeholder="Your Mobile Number"/>
                    </div>

                    
                    <br />
                    <br />
                    <br/>
                    <h4>Confirm Account Link <i className="fa fa-check"></i></h4>

                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                        <input type="password" name="pin" value={pin} onChange={onChangeText} className="form-control" placeholder="Enter your mobile money PIN to continue"/>
                    </div>
                    <br/>

                    <button type="submit" onClick={linkMobile} className="btn btn-block btn-primary btn-lg">
                        <i className="fa fa-check"></i> Confirm Account Link
                    </button>

                </form>
            </div>
        </div>

     );
}
 
export default Form;
