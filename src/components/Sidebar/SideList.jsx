import React from 'react';
import { NavLink } from 'react-router-dom'

export default function SideList() {
    return (
        <ul className="sidebar-menu" data-widget="tree">

            <li className="header">Main Navigation</li>

            <li>
                <NavLink to="/home" className="ajax">
                    <i className="fa fa-home"></i> <span>Home</span>
                </NavLink>
            </li>

            <li>
                <NavLink to="/deposit" className="ajax">
                    <i className="fa fa-line-chart"></i> <span>Deposit</span>
                </NavLink>
            </li>

            <li>
                <NavLink to="/settings/link-mobile" className="ajax">
                    <i className="fa fa-line-chart"></i> <span>Link Mobile</span>
                </NavLink>
            </li>

            <li className="treeview">
                <a href=".">
                    <i className="fa fa-area-chart"></i> <span>Transaction Panel</span>
                    <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul className="treeview-menu">
                    <li>
                        <NavLink to="/interwallet" className="ajax">Inter-Wallet Transfer</NavLink>
                    </li>
                    <li>
                        <NavLink to="/send" className="ajax">Send to another user</NavLink>
                    </li>
                </ul>
            </li>

            <li>
                <NavLink to="/notifications" className="ajax">
                    <i className="fa fa-comments"></i> <span>Notifications</span>
                </NavLink>
            </li>
            
            <li>
                <NavLink to="/bonuses" className="ajax">
                    <i className="fa fa-birthday-cake"></i> <span>Bonuses</span>
                </NavLink>
            </li>

            <li className="header">Help and Support</li>

            <li className="treeview">
                <a href="!">
                    <i className="fa fa-tree"></i> <span>Help</span>
                    <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul className="treeview-menu">
                    <li><NavLink to="/support/help" className="ajax">Help</NavLink></li>
                    <li><NavLink to="/support/faq" className="ajax">faq</NavLink></li>
                </ul>
            </li>

            <li>
                <NavLink to="/support/chat" className="ajax">
                    <i className="fa fa-comment"></i> <span>Talk to Support</span>
                </NavLink>
            </li>

            <li>
                <NavLink to="/contact" className="ajax">
                    <i className="fa fa-user"></i> <span>Contact Us</span>
                </NavLink>
            </li>

            <li className="header">Others</li>

            <li>
                <NavLink to="http://flashmall.store" className="ajax">
                    <i className="fa fa-btc"></i> <span>FlashMall</span>
                </NavLink>
            </li>
            
            <li>
                <NavLink to="/share" className="ajax">
                    <i className="fa fa-share"></i> <span>Invite a friend</span>
                </NavLink>
            </li>
        </ul>
    );
}
