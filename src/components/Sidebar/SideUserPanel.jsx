import React from 'react';
import Avatar from './../../assets/img/avatars/avatar04.png'; 

export default class SideUserPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: true
        }
    }

    componentDidMount() {
        let hasConn = navigator.onLine;
        this.setState({ online: hasConn });
    }

    render() {
        return (
            <div className="user-panel">
                <div className="pull-left image">
                    <img src={Avatar} className="img-circle" alt="User Profile" />
                </div>
                <div className="pull-left info">
                    <p>{this.props.username}</p>
                    <a href=".">
                        <DisplayNetStat online={this.state.online} />
                    </a>
                </div>
            </div>
    
        );
    }
};

function DisplayNetStat(props) {
    return props.online ? (
            <React.Fragment><i className="fa fa-circle text-success"></i> <span>Online</span> </React.Fragment>
        ) : (
            <React.Fragment><i className="fa fa-circle text-danger"></i> <span>Offline</span> </React.Fragment>
        )
}