import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div className="welcome" style={{position:'relative',textAlign:'center',color:'black',paddingTop:'10em',paddingBottom:'15em'}}>
                    <h1 style={{paddingBottom:'2em',color:'white',fontSize:'3em',fontWeight:'700'}}>
                        Welcome to ABC Insurance
                    </h1>
                    <h4 style={{color:'white',fontWeight:'500'}}>
                        Scroll Down
                    </h4>
                    <img src="https://static.thenounproject.com/png/551749-200.png"
                    width="55em" alt="dwn"
                    />
                </div>
                
               
    
        );
    }
}

export default Welcome;