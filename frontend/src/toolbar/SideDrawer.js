import React from 'react'

const SideDrawer = props => {
    let drawerClasses = 'side_drawer';
    if (props.show) {
        drawerClasses = 'side_drawer open';
    }
    return (<nav className={drawerClasses} >
        <ul>
            <li>
                <a href="/evets">Events</a>
            </li>
            <li>
                <a href="/bookings">Bookings</a>
            </li>
        </ul>
    </nav>
    )
}
export default SideDrawer;