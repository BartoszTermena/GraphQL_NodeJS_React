import React from 'react'
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/auth-context';

const SideDrawer = props => (
    <AuthContext.Consumer>
    {(context) => {
        let drawerClasses = 'side_drawer';
        if (props.show) {
            drawerClasses = 'side_drawer open';
        }
        return (<nav className={drawerClasses} >
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
        </nav>
        )
    }}
        </AuthContext.Consumer>
    );
    
export default SideDrawer;