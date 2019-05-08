import React, { Component } from 'react';
import GP from './gp.png';
import AP from './ap.png';
import FB from './fb.png';
import TW from './tw.png';
import Gplus from './gplus.png';
import Youtube from './youtube.png';
import Insta from './instagram.png';

class Footer extends Component {
    render() {
        return (
          
         <div className="mainDiv" sytle={{display:'block',position:'relative',bottom:'0',paddingTop:'1.25em',color:'white',marginRight:'auto'}}>
            <div className="footer-content" style={{backgroundColor:'white',margin:'0',position:'relative',marginBottom:'0'}}>
              <div className="col-lg-12 col-md-12 col-sm-12" style={{marginBottom:'0',paddingTop:'6em',backgroundColor:'white',width:'100%',marginLeft:'auto',left:'auto',right:'auto',paddingBottom:'2em'}}>
              <div className="col-lg-2 col-md-2 col-sm-12">
              <a href="/" style={{textDecoration:'none',cursor:'pointer'}}>
                          <img src="https://www.freepnglogos.com/uploads/abc-png-logo/abc-family-png-logo-14.png" alt="footerLogo" style={{width:'60%',height:'60%',border:'0',paddingTop:'1em'}}/>
                          <h2 style={{color:'black',fontSize:'1em',marginTop:'5px',fontWeight:'400'}}>
                          © Copyright ABC
                          </h2>
                      </a>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12" style={{paddingBottom:'0.5em',borderLeft:'3px #1A5276 solid'}}>                    
                  <h5 style={{color:'black',fontWeight:'700',fontSize:'2.3em',margin:'0.82rem 0 0.656rem 0'}}>
                      Company
                  </h5>
                  <ul style={{paddingLeft:'0',listStyleType:'none'}}>
                    

                      <a href="/" style={{textDecoration:'none',color:'black',cursor:'pointer'}}>
                          <li style={{fontSize:'1em',padding:'0.2em',fontWeight:'450'}}>
                          Privacy Policy
                          </li>
                      </a> 

                      <a href="/" style={{textDecoration:'none',color:'black',cursor:'pointer'}}>
                          <li style={{fontSize:'1em',padding:'0.2em',fontWeight:'450'}}>
                          T & C *
                          </li>
                      </a> 

                    

                     
                  </ul>
                  </div>
              <div className="col-lg-2 col-md-2 col-sm-12" style={{paddingBottom:'2.5em'}}>                    
                  <h5 style={{color:'black',fontWeight:'700',fontSize:'2.3em',margin:'0.82rem 0 0.656rem 0'}}>
                      Follow Us
                  </h5>
                  <ul style={{paddingLeft:'0',listStyleType:'none',height:'auto',marginBottom:'-10px'}}>
                     <a href="/" style={{textDecoration:'none',color:'white',cursor:'pointer'}}>
                          <li style={{fontSize:'1.3em',padding:'0.2em',display:'inline'}}>
                            <img src={FB} width="25em" alt="FB"/>
                          </li>
                      </a> 

                      <a href="/" style={{textDecoration:'none',color:'white',cursor:'pointer'}}>
                      <li style={{fontSize:'1.3em',padding:'0.2em',display:'inline'}}>
                                <img src={TW} width="25em" alt="TW"/>
                          </li>
                      </a> 
                      <a href="/" style={{textDecoration:'none',color:'white',cursor:'pointer'}}>
                      <li style={{fontSize:'1.3em',padding:'0.2em',display:'inline'}}>
                                <img src={Gplus} width="25em" alt="GP"/>
                          </li>
                      </a> 
                      <a href="/" style={{textDecoration:'none',color:'white',cursor:'pointer'}}>
                      <li style={{fontSize:'1.3em',padding:'0.2em',display:'inline'}}>
                                <img src={Youtube} width="25em" alt="Youtube"/>
                          </li>
                      </a> 
                      <a href="/" style={{textDecoration:'none',color:'white',cursor:'pointer'}}>
                      <li style={{fontSize:'1.3em',padding:'0.2em',display:'inline'}}>
                                <img src={Insta} width="25em" alt="Insta"/>
                          </li>
                      </a> 

                  </ul>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-12" style={{paddingBottom:'2em'}}>                    
                  <h5 style={{color:'black',fontWeight:'700',fontSize:'2.3em',margin:'0.82rem 0 0.656rem 0',}}>
                      Contact Us
                  </h5>
                  <ul style={{paddingLeft:'0',listStyleType:'none',height:'auto',marginBottom:'-10px'}}>
                     <a href="/" style={{textDecoration:'none',color:'black',cursor:'pointer'}}>
                         <p style={{fontSize:'1em',fontWeight:'450'}}>
                             Insights123@abc.com
                         </p>
                      </a> 
                  </ul>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12" >
                
                  <h4 style={{fontSize:'1em',color:'black',textAlign:'center'}}>
                  <strong>SUBSCRIBE TO OUR LATEST INSIGHTS</strong>
                        
                    </h4>
                 <input type="text" id="exampleForm2" className="form-control" style={{width:'13em',display:'inline'}} />
                         <button className="btn btn-indigo" style={{display:'inline',height:'4em',marginBottom:'1em'}}>Go</button>
              
                  

                    </div>      
             
            </div>
            
            
             
             
            </div>               
            <div className="col-lg-12 col-md-12 col-sm-12" style={{backgroundColor:'#273746',paddingTop:'0.8em',paddingBottom:'0.2em'}}>
                 <div className="col-lg-4 col-md-4 col-sm-12">
                    <p style={{color:'white',marginTop:'1.5em',paddingBottom:'1em'}}>
                    <b>ABC Insights -</b> Get our latest thinking on your iPhone, iPad, or Android device.
                    </p>

                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                
                          <img  src={GP} style={{cursor:'pointer',width:'auto',padding:'0.5em'}} alt="google play"/>
                        
                          <img src={AP} style={{cursor:'pointer',width:'11em'}} alt="google play"/>

                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                <strong>
                          <p style={{color:'white',marginTop:'1.5em',paddingBottom:'1em'}}>
                          © Copyright 2019 - ABC Insurance
                          </p>

                      </strong>
                </div>
              </div>
            

           
            
         
      </div>
         
        );
    }
}

export default Footer;