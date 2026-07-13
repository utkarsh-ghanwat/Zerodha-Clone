import React from 'react'

function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img src="/Media/Images/homeHero.png" alt="Hero Image" className='mb-5' />
                <h1>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button style={{width:"20%", margin:"0 auto"}} className="btn btn-primary fs-5 p-2">Sign up for free</button>
            </div>
        </div>  
     );
 }
 
 export default Hero;