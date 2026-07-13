import React from 'react'

function Stats() {
    return (
        <div className='container p-3'>
            <div className='row'>
                <div className='col-6 p-5' style={{ marginTop: "40px" }}>
                    <h2 className='fs-2 mb-5'>Trust with confidence</h2>
                    <h3 className='fs-4'>Customer-first always</h3>
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h3 className='fs-4'>No spam or gimmicks</h3>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h3 className='fs-4'>The Zerodha universe</h3>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 className='fs-4'>Do better with money</h3>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className='col-6 p-5'>
                    <img src="Media/Images/ecosystem.png" alt="ecosystem" style={{ width: "100%" }}></img>
                    <div className='text-center'>
                        <a className="mx-10" style={{textDecoration:"none"}} href="#">Explore our products<i className="fa-solid fa-arrow-right"></i></a>
                        <a className="mx-10" style={{textDecoration:"none"}} href="#">Try kite demo<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div>
                <img src="/Media/Images/pressLogos.png" alt="Image" className='Logos' style={{ display: "block", margin: "auto" }}></img>
            </div>

        </div>
    );
}

export default Stats;