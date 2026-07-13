import React from 'react'

function Pricing() {
    return (
        <div className="container p-5">
            <div className="row mt-5" >

                <div className="col-6">
                    <h2 className='fs-2'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='/pricing' style={{ textDecoration: "none" }} >See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='row col-6' style={{ margin: "ms auto" }}>
                    <div className='col-4 text-center border' >
                        <img src="/Media/Images/pricingEquity.svg" alt="img" />
                        <p>Free account<br></br> opening</p> </div>

                    <div className='col-4 text-center border'>
                        <img src="/Media/Images/pricingEquity.svg" alt="img" />
                        <p> Free equity delivery
                            and direct mutual funds<br></br> opening</p> </div>

                    <div className='col-4 text-center border'>
                        <img src="/Media/Images/Intradaytrades.svg" alt="img" />
                        <p> Intraday and
                            F&O<br></br> opening</p> </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;