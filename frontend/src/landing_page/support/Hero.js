import React from 'react'

function Hero() {
    return ( 
        <section className='container-fluid' style={{marginTop:"50px"}} id="SupportHero">
            <div className='p-3' id="SupportWrapper">
                <h4>Support Portal</h4>
                <a href="">Track tickets</a>   
            </div>
            <div className=' row p-3'>
                <div className='col-6 p-5'>
                    <h2 className='fs-2'>Search for an answer or browse help topics to create a ticket</h2>
                    <input placeholder='Eg. How do i activate F&O, why is my order getting rejected....' /> <br></br>
                    <a href="">Track account opening</a>
                    <a href="">Track segment activation</a>
                    <a href="">Intraday margins</a>
                    <a href="">Kite user manual</a>
                </div>  
                <div className='col-6 p-5'>
                    <h2 className='fs-3'>Featured</h2>
                    <ol>
                        <li><a href="">Current Takeovers and Delisting - January2024</a></li>
                        <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>  
            </div>
            
        </section>
     );
}

export default Hero;

