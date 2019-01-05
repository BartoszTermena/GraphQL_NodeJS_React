import React from 'react';
import DrawerToggle from './DrawerToggle';


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
                    <a href="/evets">Events</a>
                </li>
                <li>
                    <a href="/bookings">Bookings</a>
                </li>
            </ul>
        </div>
    </nav>
  </header>
);

export default Toolbar;