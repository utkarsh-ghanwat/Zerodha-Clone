import React from 'react'

function Team() {
    return (
        <div>
            <h2 className='text-center' style={{margin:"70px"}}>People</h2>
            <div className='row 'style={{marginBottom:"50px"}}>
                <div className='col'></div>

                <div className='col'>
                    <img className='nk' src="Media/Images/nithinKamath.jpg" alt="nk" ></img>
                    <h3>Nithin Kamath</h3>
                    <p>Founder , CEO</p>
                </div>
                <div className='col'>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a className='underline' href="">Homepage</a> / <a  className='underline' href="">TradingQnA</a> / <a className='underline' href="">Twitter</a></p>

                </div>


                <div className='col'></div>
            </div>

        </div>
    );
}

export default Team;








