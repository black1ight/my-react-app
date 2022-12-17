import React from 'react';
import SidebarStyle from './Sidebar.module.css';


const Sidebar = () => {
    return <ul className={SidebarStyle.sidebarList}>
        <li className="sidebar-item">
            <a className="sidebar-link" href="/#">Home</a>
        </li>
        <li className="sidebar-item">
            <a className="sidebar-link" href="/#">News Feed</a>
        </li>
        <li className="sidebar-item">
            <a className="sidebar-link" href="/#">Messages</a>
        </li>
        <li className="sidebar-item">
            <a className="sidebar-link" href="/#">Settings</a>
        </li>
    </ul>
}

export default Sidebar