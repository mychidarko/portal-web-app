import React from 'react'

import RightActivityTab from './RightActivityTab';
import RightGeneralTab from './RightGeneralTab';

export default function RightSideBar() {
    return (
        <aside className="control-sidebar control-sidebar-dark">
        
            <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
                <li>
                    <a href="#control-sidebar-home-tab" data-toggle="tab">
                        <i className="fa fa-home"></i>
                    </a>
                </li>
                <li>
                    <a href="#control-sidebar-settings-tab" data-toggle="tab">
                        <i className="fa fa-gears"></i>
                    </a>
                </li>
            </ul>

            <div className="tab-content">
                <RightActivityTab />
                <RightGeneralTab />
            </div>
        </aside>
    );
}