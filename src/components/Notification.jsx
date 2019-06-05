import React from 'react'
import Logo from './../assets/img/logo.png';

const Notification = () => {
    return ( 
        <a href="/notification/{id}" className="ajax">
            <div className="pull-left">
                <img src={Logo} className="img-circle" alt="User Profile" style={{ width: 55, marginRight: 5 }} />
            </div>
            <h4>
                Notification title
                <small className=" pull-right">
                    <i className="fa fa-clock-o"></i> received at
                </small>
            </h4>

            <p>Notification body</p>
        </a>
     );
}
 
export default Notification;