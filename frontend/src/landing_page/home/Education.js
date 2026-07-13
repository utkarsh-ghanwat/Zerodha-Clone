import React from "react";

function Education() {
    return ( 
        <div className="container m-5"> 
            <div className="row">
                    <div className="col-5">
                        <img src="/Media/Images/education.svg" alt="education" style={{width:"70%"}}></img>
                    </div>
                    <div className="col-7">
                        <h3 className='fs-2'>Free and open market education </h3><br></br>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href="/" style={{textDecoration:"none"}}>Varsity<i className="fa-solid fa-arrow-right"></i></a>
                        <br></br>
                        <br></br>
                        <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href="/" style={{textDecoration:"none"}}>TradingQ&A<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
            </div>
        </div>
     );
}

export default Education;