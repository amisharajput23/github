import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends Component {

onLogin(){
    this.props.onLogin();
}

    render(){
        return(
            
              <Navbar bg="primary" variant="dark">
                  <Navbar>
                      <Navbar.Brand>
                          Github Searcher
                      </Navbar.Brand>
                  </Navbar>
                 <Nav className="mr-auto">
                     <NavItem onClick={this.onLogin.bind(this)} href="#">Login</NavItem>
                 </Nav>

              </Navbar>
            
    
        );
    }
}
export default Header;