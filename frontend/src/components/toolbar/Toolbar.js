import React from 'react';
import DrawerToggle from './DrawerToggle';
import { NavLink } from 'react-router-dom';

import AuthContext from '../context/auth-context';

const Toolbar = props => (
    <AuthContext.Consumer>
        {(context) => {
            return <header className="toolbar">
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
                    {!context.token && <li>
                        <NavLink to="/auth">Authenticate</NavLink>
                    </li>}
                    <li>
                        <NavLink to="/events">Events</NavLink>
                    </li>
                    {context.token && <li>
                        <NavLink to="/bookings">Bookings</NavLink>
                    </li>}
                    </ul>
                </div>
            </nav>
        </header>
        }}
    
  </AuthContext.Consumer>
);

export default Toolbar;