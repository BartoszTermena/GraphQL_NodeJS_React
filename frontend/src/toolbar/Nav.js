import React, { Component } from 'react';
import './toolbar.css';

import Toolbar from './Toolbar';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';


export default class Nav extends Component {

    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    };
    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };


    render() {

        let backDrop;

        if(this.state.sideDrawerOpen) {
            backDrop = <Backdrop click={this.backdropClickHandler}/>
        }
        return ( 
            <div style={{height: '100%'}}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backDrop}
            </div>
        )
    }
}
