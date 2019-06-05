import React from 'react'

import SideList from './SideList'

import SideUserPanel from './SideUserPanel';
import SideSearch from './SideSearch';

export default function SideBar(props) {
    return (
        props.hasAuth ? (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <SideUserPanel username="Mychi Darko" />
                    <SideSearch />
                    <SideList />
                </section>
            </aside>
        ) : ''
    );
}
