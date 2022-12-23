import React from 'react';
import SidebarStyle from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';


const Sidebar = () => {
    return <ul className={SidebarStyle.sidebarList}>
        <li className={SidebarStyle.sidebarItem}>
            <NavLink to='/profile' className={SidebarStyle.link}>Home</NavLink>
        </li>
        <li className={SidebarStyle.sidebarItem}>
            <NavLink className={SidebarStyle.link}>News Feed</NavLink>
        </li>
        <li className={SidebarStyle.sidebarItem}>
            <NavLink to='/messages' className={SidebarStyle.link}>Messages</NavLink>
        </li>
        <li className={SidebarStyle.sidebarItem}>
            <NavLink className={SidebarStyle.link}>Settings</NavLink>
        </li>
    </ul>
}

export default Sidebar