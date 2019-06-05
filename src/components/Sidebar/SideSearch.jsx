import React from 'react';
import axios from 'axios';

export default class SideSearch extends React.Component{
    constructor(){
        super();
        this.state = {
            search: ''
        }
    }

    handleSubmit = () => {
        axios.get().then().catch();
    }

    handleChange = event => {
        this.setState({
            search: event.target.value
        });
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} method="get" className="sidebar-form ajax">
                <div className="input-group">
                    <input type="text" name="q" className="form-control" placeholder="Search for users" onChange={this.handleChange} />
                    <span className="input-group-btn">
                        <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                            <i className="fa fa-search"></i>
                        </button>
                    </span>
                </div>
            </form>
        );
    }
};