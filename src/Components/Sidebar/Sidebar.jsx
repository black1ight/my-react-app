import React from 'react';
import SidebarStyle from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';

const setActive = ({isActive}) => isActive ? SidebarStyle.activeLink : 'white';

const Sidebar = () => {
    return <ul className={SidebarStyle.List}>
        <li className={SidebarStyle.Item}>
            <NavLink to='/profile' className={setActive}>Home</NavLink>
        </li>
        <li className={SidebarStyle.Item}>
            <NavLink to='/news' className={setActive}>News</NavLink>
        </li>
        <li className={SidebarStyle.Item}>
            <NavLink to='/dialogs' className={setActive}>Dialogs</NavLink>
        </li>
        <li className={SidebarStyle.Item}>
            <NavLink to='/settings' className={setActive}>Settings</NavLink>
        </li>
    </ul>
}

export default Sidebar