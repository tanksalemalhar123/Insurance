import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="col-lg-12 col-md-12 col-sm-12" style={{backgroundColor:'#AED6F1',paddingTop:'4em',paddingBottom:'3em'}}>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <p style={{fontSize:'2.5em',fontWeight:'450',textAlign:'left'}}>
                    Connect with our Financial Services Practice
                    </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                <button  className="btn btn-outline-indigo" style={{display:'inline',height:'5em',marginBottom:'1em',fontSize:'0.8em'}}>Contact Us</button>
                </div>

            </div>
        );
    }
}

export default Contact;