import React, { Component } from 'react';
import {  Link } from 'react-router'
import { Nav,Navbar ,NavItem,NavDropdown ,MenuItem,NavbarBrand, } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logout } from './actions/userAction'
import { browserHistory } from 'react-router';
/*import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';*/
/*import '../public/docs/assets/css/bootstrap.css'
import '../public/docs/assets/css/bootstrap-responsive.css'*/





class Nav1 extends Component {

  //
  handlelogout(){
    console.log("handlelogout","handlelogout");
    this.props.logout();

  }
  handlelogin(){
    if(this.props.user.isAuthenticated ===false){
        browserHistory.push("/");
    }

  }
  render() {
    //console.log("user",this.props.user);

    if(0){
      return (
        <div>
            <ul>
              <li>
                <Link to={`/about`}>about{this.props.test}</Link>
              </li>
              <li>
                <Link to={`/home`}>home</Link>
              </li>
            </ul>
        </div>
      );
    }else {
      return (
          <div>


              <Navbar >
                  <Navbar.Header >
                      <Navbar.Brand>
                          <a href={`http://www.smart-flow.cn`}>SmartFlow</a>
                      </Navbar.Brand>
                      <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                      {/*<Nav>
                          <NavItem  eventKey={1} ><Link to={`/home`}>Home</Link></NavItem>
                          <NavItem eventKey={ 2} ><Link to={`/about`}>About</Link></NavItem>
                          <NavItem eventKey={ 2} ><Link to={`/smart`}>Smart</Link></NavItem>
                          <NavItem eventKey={ 2} ><Link to={`/input`}>Input</Link></NavItem>
                      </Nav>*/}
                      <Nav pullRight>
                          <NavItem eventKey={ 2} ><Link to={`/smart`}>新增项目</Link></NavItem>
                          <NavItem eventKey={5} onClick={this.handlelogin.bind(this)}>{this.props.user.isAuthenticated ? this.props.user.userName:"登陆"}</NavItem>
                          <NavItem eventKey={5} onClick={this.handlelogout.bind(this)}>退出</NavItem>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>



          </div>
      );
    }
  }
}

const mapStateToProps = (state) => {

  return {
        user: state.user
  }
};

const mapDispatchToProps = (dispatch) =>{
  return {
      logout:() => {
        dispatch(logout())
      }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav1)
