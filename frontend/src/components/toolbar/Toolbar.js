import React from 'react';
import DrawerToggle from './DrawerToggle';
import { NavLink } from 'react-router-dom';

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
        <div className="toolbar_toggle_button">
            <DrawerToggle click={props.drawerClickHandler}/>
        </div>
        <div className="toolbar_logo">
        <a href="/">Logo</a>
        </div>
        <div className="spacer"></div>
        <div className="toolbar_items">
            <ul>
            <li>
                <NavLink to="/auth">Authenticate</NavLink>
            </li>
            <li>
                <NavLink to="/events">Events</NavLink>
            </li>
            <li>
                <NavLink to="/bookings">Bookings</NavLink>
            </li>
            </ul>
        </div>
    </nav>
  </header>
);

export default Toolbar;