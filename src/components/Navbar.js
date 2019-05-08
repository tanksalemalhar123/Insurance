import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
          <div className="container-fluid" style={{background:"black"}}>
          <div className="navbar-header">
          <a style={{color:'black',background:'yellow'}}className="navbar-brand" href="/">ABC Insurance</a>
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" >
              <span className="icon-bar" style={{backgroundColor:'white'}}></span>
              <span className="icon-bar" style={{backgroundColor:'white'}}></span>
              <span className="icon-bar" style={{backgroundColor:'white'}}></span> 
            </button>

           
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active">
             
              <a href="/" style={{color:'white',backgroundColor:'black',fontFamily:'Nanum Gothic, sans-serif'}}>Home</a></li>
              <li><a href="/" style={{color:'white',backgroundColor:'black',fontFamily:'Nanum Gothic, sans-serif'}}>About</a></li>
              <li><a href="/" style={{color:'white',backgroundColor:'black',fontFamily:'Nanum Gothic, sans-serif'}}>Services</a></li>
             
             
             
             
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/" style={{color:'white',backgroundColor:'black',fontFamily:'Nanum Gothic, sans-serif'}}><span >Contact Us</span></a></li>
             
            </ul>
          </div>
        </div>
    
          
        );
    }
}

export default Navbar;