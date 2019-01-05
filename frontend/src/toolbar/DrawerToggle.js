import React from 'react'

const DrawerToggle = props => (
    <button className="toggle_button" onClick={props.click}>
        <div className="toggle_button_line" />
        <div className="toggle_button_line" />
        <div className="toggle_button_line" />
    </button>
)
export default DrawerToggle;