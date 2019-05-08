import React, { Component } from 'react';
import Money from './money1.jpg'

class Services extends Component {
    render() {
        return (
            <div className="col-lg-12 col-md-12 col-sm-12" style={{backgroundColor:'#EBF5FB',paddingBottom:'5em',paddingTop:'0.2em'}}>
                <div className="col-lg-12 col-md-12 col-sm-12" style={{paddingBottom:'3em'}}>
                       <center>
                       <h5 className="col-lg-12 col-md-12 col-sm-12" style={{color:'black',textAlign:'center',verticalAlign:'middle',top:'50%',paddingTop:'2%',fontSize:'1.8em',fontFamily:'Catamaran, sans-serif',fontWeight:'500',WebkitTapHighlightColor:'rgba(0,0,0,0)'}}> 
                               OUR SERVICES
                               <hr  style={{marginTop:'0px',height:'0.07em',backgroundColor:'BLACK',width:'6%'}}/>
                            </h5>
                             
                       </center>
                    </div>
                <div className="col-lg-4 col-md-4 col-sm-12" style={{backgroundColor:'#E5E7E9',paddingBottom:'1em'}}>
                   <div className="card" style={{backgroundColor:'#AEB6BF'}}>
 
                   <div className="view overlay">
                        <img className="card-img-top" src={Money} alt="Card cap2" style={{width:'100%',height:'15vw',objectFit:'cover'}}/>
                        <a href="#!">
                            <div className="mask rgba-white-slight"></div>
                        </a>
                        </div>


                        <div className="card-body">

                        
                        <h4 className="card-title" style={{fontSize:'1.8em',fontWeight:'700'}}>Savings And Income Plans</h4>
                        
                        <p className="card-text" style={{fontSize:'1em',color:'black'}}>Save & grow your money through disciplined savings for a better life</p>
                        
                        <button type="button" className="btn btn-cyan" ripple-radius style={{fontSize:'1em',marginBottom:'1em'}}>See More</button>

                        </div>

                    </div>
                </div>
                
               
                    

                    <div className="col-lg-4 col-md-4 col-sm-12" style={{backgroundColor:'#E5E7E9',paddingBottom:'1em'}}>
                    <div className="card" style={{backgroundColor:'#2C3E50'}}>


                    <div className="view overlay">
                    <img className="card-img-top" src="https://ak0.picdn.net/shutterstock/videos/653230/thumb/1.jpg" alt="Card cap" style={{width:'100%',height:'15vw',objectFit:'cover'}}/>
                    <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                    </div>


                    <div className="card-body">

                    
                    <h4 className="card-title" style={{fontSize:'1.8em',fontWeight:'700',color:'#F4D03F'}}>Group Plans</h4>
                    
                    <p className="card-text" style={{fontSize:'1em',color:'#F4D03F'}} >Because your company’s most important asset deserve special! Happy employees create high-performance</p>
                    
                    <button type="button" className="btn btn-yellow" ripple-radius style={{fontSize:'1em',marginBottom:'1em',color:'black'}}>See More</button>

                    </div>

                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12" style={{backgroundColor:'#E57E9',paddingBottom:'1em'}}>
                   <div className="card" style={{backgroundColor:'#808B96'}}>
                   <div className="view overlay">
                   <img className="card-img-top" src="https://ak8.picdn.net/shutterstock/videos/9895808/thumb/9.jpg" alt="Card cap1" style={{width:'100%',height:'15vw',objectFit:'cover'}}/>
                        <a href="#!">
                            <div className="mask rgba-white-slight"></div>
                        </a>
                        </div>


                        <div className="card-body">

                        
                        <h4 className="card-title" style={{fontSize:'1.8em',fontWeight:'700',color:'white'}}>NRI Plans</h4>
                        
                        <p className="card-text" style={{color:'white',fontSize:'1em'}}>Because we care for you wherever in the world you may be and An opportunity for NRIs to invest and gain from India’s growth</p>
                        
                        <button type="button" className="btn btn-indigo" ripple-radius style={{fontSize:'1em',marginBottom:'1em',color:'white'}}>See More</button>

                        </div>

                        </div>
                    </div>
                

            </div>
        );
    }
}

export default Services;