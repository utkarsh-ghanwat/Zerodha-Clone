import React from 'react'

function Footer() {
    return (
        <footer className="container border-top" style={{ background: "#f5f5f5" }}>
            <div className="row m-5 p-5">
                <div className='col-3'>
                    <img style={{ width: "35%" }} src="Media/Images/logo.svg" alt="random"></img>
                    <p className='m-0 fs-6 text-muted'>copy; 2010 - 2025, Zerodha Broking Ltd. <br></br>
                        All rights reserved</p>
                    <div className='mt-3 text-muted'>
                        <i className="fa-brands m-1 fa-x-twitter"></i>
                        <i className="fa-brands m-1 fa-facebook"></i>
                        <i className="fa-brands m-1 fa-instagram"></i>
                        <i className="fa-brands m-1 fa-linkedin-in"></i><br></br> <hr></hr>
                        <i className="fa-brands m-1 fa-youtube"></i>
                        <i className="fa-brands m-1 fa-whatsapp"></i>
                        <i className="fa-brands m-1 fa-telegram"></i>
                    </div>
                </div>

                <div className='col text-muted'>
                    <h5 className='mb-3'>Account</h5>
                    <a href="#">Open demat account</a><br></br>
                    <a href="#">Minor demat account</a><br></br>
                    <a href="#">NRI demat account</a><br></br>
                    <a href="#">Commodity</a><br></br>
                    <a href="#">Dematerialisation</a><br></br>
                    <a href="#">Fund transfer</a><br></br>
                    <a href="#">Referral program</a><br></br>
                    <a href="#">MTF</a><br></br>
                    <a href="#"></a><br></br>
                    <a href="#"></a><br></br>
                </div>
                <div className='col text-muted'>
                    <h5 className='mb-3'>Support</h5>
                    <a href="#">Support portal</a><br></br>
                    <a href="#">How to file a complaint?</a><br></br>
                    <a href="#">Status of your complaints</a><br></br>
                    <a href="#">Bulletin</a><br></br>
                    <a href="#">Circular</a><br></br>
                    <a href="#">Z-Connect blog</a><br></br>
                    <a href="#">Downloads</a><br></br>
                </div>
                <div className="col text-muted">
                    <h5 className='mb-3'>Company</h5>
                    <a href="#">Philosophy</a><br></br>
                    <a href="#">Press & media</a><br></br>
                    <a href="#">Careers</a><br></br>
                    <a href="#">Zerodha Cares (CSR)</a><br></br>
                    <a href="#">Zerodha.tech</a><br></br>
                    <a href="#">Open source</a><br></br>
                </div>

                <div className="col text-muted">
                    <h5 className='mb-3'>Quick Link</h5>
                    <a href="#">Brokerage charges</a><br></br>
                    <a href="#">Market holidays</a><br></br>
                    <a href="#">Economic calendar</a><br></br>
                    <a href="#">Calculators</a><br></br>
                    <a href="#">Markets</a><br></br>
                    <a href="#">Sectors</a><br></br>
                </div>

                <div className='text-muted mt-2' style={{ fontSize: "10px" }}>

                    <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                    <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                    <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism

                    </p>
                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                    <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                    <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>
                    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                    <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>

                </div>
                <div>
                    <a className="tc" href="">NSE</a>
                    <a className="tc" href="">BSE</a>
                    <a className="tc" href="">MCX</a>
                    <a className="tc" href="">Terms & conditions</a>
                    <a className="tc" href="">Policies & procedures</a>
                    <a className="tc" href="">Privacy policy</a>
                    <a className="tc" href="">Disclosure</a>
                    <a className="tc" href="">For investor's attention</a>
                    <a className="tc" href="">Investor charter</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;






