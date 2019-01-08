import React from 'react'
import { NavLink } from 'react-router-dom';

const SideDrawer = props => {
    let drawerClasses = 'side_drawer';
    if (props.show) {
        drawerClasses = 'side_drawer open';
    }
    return (<nav className={drawerClasses} >
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
    </nav>
    )
}
export default SideDrawer;