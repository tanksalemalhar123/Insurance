import React, { Component } from 'react';
import Man from './man.png';
import Women from './women.png';
import OldMan from './oldman.png';

class Testimonials extends Component {
    render() {
        return (
            <div className="col-lg-12 col-md-12 col-sm-12 head" style={{marginTop:'0px',height:'auto',background:'white',paddingTop:'1em'}}>
             <div className="col-lg-12 col-md-12 col-sm-12" style={{paddingBottom:'3em'}}>
                       <center>
                       <h5 className="col-lg-12 col-md-12 col-sm-12" style={{color:'black',textAlign:'center',verticalAlign:'middle',top:'50%',paddingTop:'2%',fontSize:'1.6em',fontFamily:'Catamaran, sans-serif',fontWeight:'100',WebkitTapHighlightColor:'rgba(0,0,0,0)'}}> 
                               CLIENT TESTIMONIALS
                               <hr  style={{marginTop:'0px',height:'0.07em',backgroundColor:'BLACK',width:'6%'}}/>
                            </h5>
                             
                       </center>
                    </div>
                 <div className="col-lg-4 col-md-4 col-sm-12" style={{backgroundColor:'white',paddingBottom:'1em'}}>
                        <img src={Man} style={{width:'auto',paddingBottom:'1em'}} alt="Man"/>
                        <p style={{fontSize:'1em',fontWeight:'500'}}>
                        Highest level of Professionalism and dedication in service is what I received from ABC during my recent leasing deal closure through them. The gentleman who worked for me had through knowledge of market and he guided me to finish the deal without any hassle.
                        </p>
                        <h5 style={{fontWeight:'800'}}>
                            -Marius Kramer
                        </h5>
                 </div>
                 <div className="col-lg-4 col-md-4 col-sm-12" style={{backgroundColor:'white',paddingBottom:'1em'}}>
                        <img src={Women} style={{width:'auto',paddingBottom:'1em'}} alt="Women"/> 
                        <p style={{fontSize:'1em',fontWeight:'500'}}>
                        We have taken the services of ABC and their team worked very swiftly in closing a complicated and tricky commercial leasing agreement for us. The staffs of ABC completely represented us and were available to assist as and when needed. I will be preferring services of ABC for any future requirements!
                        </p>
                        <h5 style={{fontWeight:'800'}}>
                            -Alice Jocasta
                        </h5>
                 </div>
                 <div className="col-lg-4 col-md-4 col-sm-12" style={{backgroundColor:'white',paddingBottom:'1em'}}>
                        <img src={OldMan} style={{width:'auto',paddingBottom:'1em'}} alt="OldMan"/>
                        <p style={{fontSize:'1em',fontWeight:'500'}}>
                        ABC leasing services are fabulous people to work with. On multiple occasions the staffs of ABC went over and above than being a mediator or consultant. Our company received top notch services from them. I truly thank them for their continuous guidance and quality of work.
                        </p>
                        <h5 style={{fontWeight:'800'}}>
                            -Aaron Haynes
                        </h5>
                 </div>
                
            </div>
        );
    }
}

export default Testimonials;