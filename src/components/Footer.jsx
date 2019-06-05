import React from 'react'

const Footer = () => {
    return ( 
        <footer className="main-footer bg-white">
            <div className="pull-right hidden-xs">
                Anything you want
            </div>

            <strong>
                &copy; <script> var d = new Date(); document.write(d.getFullYear());</script><br/>
                Portal Network.
            </strong>
            <br/>
            All rights reserved.
        </footer>

     );
}
 
export default Footer;