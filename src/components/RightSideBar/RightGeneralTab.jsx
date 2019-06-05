import React from 'react'

export default function RightGeneralTab(){
    return (
        <div className="tab-pane" id="control-sidebar-settings-tab">
            <form method="post">
                <h3 className="control-sidebar-heading">General Settings</h3>

                <div className="form-group">
                    <label className="control-sidebar-subheading">
                        Report panel usage
                        <input type="checkbox" className="pull-right" checked onChange={() => { /**/}} />
                    </label>

                    <p>
                    Some information about this general settings option
                    </p>
                </div>

                <div className="form-group">
                    <label className="control-sidebar-subheading">
                        Allow mail redirect
                        <input type="checkbox" className="pull-right" checked onChange={() => { /**/}} />
                    </label>

                    <p>
                    Other sets of options are available
                    </p>
                </div>

                <div className="form-group">
                    <label className="control-sidebar-subheading">
                        Expose author name in posts
                        <input type="checkbox" className="pull-right" checked onChange={() => { /**/}} />
                    </label>

                    <p>
                    Allow the user to show his name in blog posts
                    </p>
                </div>

                <h3 className="control-sidebar-heading">Chat Settings</h3>

                <div className="form-group">
                    <label className="control-sidebar-subheading">
                        Show me as online
                        <input type="checkbox" className="pull-right" checked onChange={() => { /**/}} />
                    </label>
                </div>

                <div className="form-group">
                    <label className="control-sidebar-subheading">
                        Turn off notifications
                        <input type="checkbox" className="pull-right" onChange={() => { /**/}} />
                    </label>
                </div>

                <div className="form-group">
                    <label className="control-sidebar-subheading">
                        Delete chat history
                        <a href="." className="text-red pull-right">
                            <i className="fa fa-trash-o"></i>
                        </a>
                    </label>
                </div>
            </form>
        </div>
    );
}