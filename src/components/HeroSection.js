import React from 'react'
import "../App.css"
import "./HeroSection.css"
import { Link } from "react-router-dom"




function HeroSection(props) {
  return (
    <>
  
   
    <div className='hero-container'>
     

      <img src="/images/1.1.png" alt="bug" width={500} to="/" className='responsive-car'/>
 
      <div className="top-left">
        <h4>TAKE IT FOR A SPIN!</h4>
        <h2 className='360moke'>#360 MOKE</h2>
        </div>

      <div className='hero-btns'>

        
        </div>
      </div>
      <div className='split'>
          <h1><strong>CUSTOMIZE YOUR MOKE TODAY!</strong></h1>
          
          {/* <div className="botton-container" onClick={ window.location.href='/shop'}> */}
          <div className="botton-container">
                 
               <Link to="/shop" className='redButton' target="_blank">BUILD YOURS</Link>
          

          </div>         
      </div>
      
      <div className="image-militar-container">
      <img src="/images/2.png" alt="militar" className='responsive'></img>
     
      {/* <Link to="/"><div className="botton-left">CUSTOMIZE</div></Link>
       <Route path="/shop" exact component={Shop}/> */}
      
      </div>
      <img src="/images/3.png" alt="rainbow" className='responsive'></img>
      <img src="/images/4.png" alt="rainbow" className="responsive"></img>
      <img src="/images/5.png" alt="rainbow" className="responsive"></img>
      <div className="videoWrapper">
      <video src='/videos/ma.mp4' width="100%"autoPlay loop muted controls/>
      </div>
    
    
    </>
  );
}

export default HeroSection