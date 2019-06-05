import React from 'react';
import QR from './../../assets/img/qr.jpg'

const Form = (props) => {
    return ( 
        <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4">
            <div className="box box-default">
                {/*G7HPvOdnznNqLnikY0o0OX5EgSbXy7Ol2oAoopeIOtUQR81KNQSs2sFIOXYK*/}
                
                <form className="box-body">
                   <center>
                        <img src={QR} style={{ width: '100%' }} alt="your account QR CODE"/>
                        <br/>
                        <br/>
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-user"></i>
                            </span>
                            <input type="text" readOnly={true} className="form-control" value={props.address}/>
                        </div>
                    </center>
                </form>
            </div>
        </div>
     );
}
 
export default Form;