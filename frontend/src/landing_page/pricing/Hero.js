import React from 'react'

function Hero() {
    return (
        <div className='container text-center' style={{ marginTop: "150px" }}>
            <div>
                <div style={{marginBottom:"50px"}}>
                <h2>Charges</h2>
                <p className='text-muted fs-5'>
                    List of all charges and taxes</p>
                </div>

                <div className='row mb-5' style={{justifyContent:"space-between"}}>
                    <div className='col-1'></div>
                    <div className='col mt-5 text-center text-muted' style={{width:"5%"}} >
                        <img src="/Media/Images/pricingEquity.svg" alt="img" />
                        <h3>Free equity delivery</h3>
                        <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p> </div>

                    <div className='col mt-5 text-center text-muted' style={{width:"5%"}}>
                        <img src="/Media/Images/Intradaytrades.svg" alt="img" />
                        <h3>Intraday and F&O trades</h3>
                        <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p> </div>

                    <div className='col mt-5 text-center text-muted' style={{width:"5%"}}>
                        <img src="/Media/Images/pricingEquity.svg" alt="img" />
                        <h3>Free Direct MF</h3>
                        <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p> </div>
                <div className='col-1'></div>
                </div>
                <div className='row'>
                    <div className='col-8'>
                        +
                    </div>
                    <div className='col-4'></div>

                </div>
            </div>
        </div>
    );
}

export default Hero;