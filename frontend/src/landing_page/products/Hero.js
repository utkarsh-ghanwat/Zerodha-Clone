import React from "react";

function Hero() {
    return (    
        <div className='container text-center border-bottom mb-5' style={{marginTop:"150px"}}>
            <h2>Zerodha Products</h2>
            <h6 className="mt-3 text-muted fs-5">Sleek, modern, and intuitive trading platforms</h6>
            <p className="mt-3 ">Check out our <a style={{textDecoration:"none"}} href="">investment offerings</a> →</p>
        </div>

    );
}

export default Hero;