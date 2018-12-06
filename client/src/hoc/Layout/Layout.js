import React, { Component } from 'react';
import Wrapper from '../Wrapper/Wrapper'
import classes from './Layout.css'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  
  state = {
    showSideDrawer: false
  }
  
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }

  render () {
    return (
      <Wrapper>
      <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
      <SideDrawer closed={this.sideDrawerClosedHandler}
                  open={this.state.showSideDrawer}/>
      <main className={classes.Content}>
        {this.props.children}
      </main>
      </Wrapper>
    )
  }  
};

export default Layout;