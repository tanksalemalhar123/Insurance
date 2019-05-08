import React, { Component } from 'react';
import Ins from './insurance.jpg';
import Ins2 from './insurance2.jpg';

class MiddleContainer extends Component {
    render() {
        return (
            <div className="col-lg-12 col-md-12 col-sm-12" style={{backgroundColor:'white'}}>
                 <div className="col-lg-12 col-md-12 col-sm-12" style={{paddingBottom:'3em'}}>
                       <center>
                       <h5 className="col-lg-12 col-md-12 col-sm-12" style={{color:'black',textAlign:'center',verticalAlign:'middle',top:'50%',paddingTop:'2%',fontSize:'1.8em',fontFamily:'Catamaran, sans-serif',fontWeight:'500',WebkitTapHighlightColor:'rgba(0,0,0,0)'}}> 
                               What We Provide
                               <hr  style={{marginTop:'0px',height:'0.07em',backgroundColor:'BLACK',width:'6%'}}/>
                            </h5>
                             
                       </center>
                    </div>
            <div className="col-lg-12 col-md-12 col-sm-12" style={{paddingTop:'2em'}}>
                    <div className="col-lg-6 col-md-6 col-sm-12" style={{paddingBottom:'8em'}}>
                    <img src={Ins} alt="team" style={{width:'60%',height:'100%',objectFit:'contain',backgroundColor:'white',borderRadius:'1%',boxShadow:'7px 10px #fff'}}/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12" style={{backgroundColor:'',paddingBottom:'5%',borderTopRightRadius:'15px',borderBottomRightRadius:'15px',borderRadius:'25px',boxShadow:'2px 2px 5px 5px #ABB2B9'}}>
                    <h2 style={{paddingTop:'0.5em',fontWeight:'500',fontSize:'3.8rem',marginBottom:'0.5rem',lineHeight:'1.2',textAlign:'left',color:'#212529',paddingBottom:'0.5em'}}>
                    Long-Term Care Insurance
                        </h2>
                        <p style={{fontSize:'1.8rem',lineHeight:'1.2',textAlign:'left',color:'#212529'}}>
                        This type of insurance helps pay for costly elder care expenses for people with chronic illnesses, disabilities, or other conditions that need daily attention over a long time frame. While health insurance covers hospital and doctor bills, it doesn't cover things such as nursing homes, assisted living, adult day care services, and home care, which are all very pricey and may be needed.
                        </p>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12" style={{paddingTop:'2em'}}>
                    <div className="col-lg-6 col-md-6 col-sm-12" style={{backgroundColor:'',borderRadius:'25px',boxShadow:'2px 2px 5px 5px #ABB2B9'}}>
                    <h2 style={{paddingTop:'0.5em',fontWeight:'500',fontSize:'3.8rem',marginBottom:'0.5rem',lineHeight:'1.2',textAlign:'left',color:'#212529',paddingBottom:'0.5em'}}>
                    Term Life Insurance
                        </h2>
                        <p style={{fontSize:'1.8rem',lineHeight:'1.2',textAlign:'left',color:'#212529',fontWeight:'400',paddingBottom:'1em'}}>
                        Provides only death benefit payment for a fixed period ranging from one to 30 years. If the policyholder doesn’t die within the term period, the coverage ends and the insured gets nothing. Being a pure life insurance, term life is one of the cheapest life insurance types in the Philippines.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12" style={{backgroundColor:'',paddingBottom:'10%',borderTopRightRadius:'15px',borderBottomRightRadius:'15px'}}>
                   
                        <img src={Ins2} alt="team" style={{width:'60%',height:'100%',objectFit:'contain',backgroundColor:'white',borderRadius:'1%',boxShadow:'7px 10px #D6EAF8'}}/>
                    </div>
                </div>
               

               

               
            </div>
        );
    }
}

export default MiddleContainer;