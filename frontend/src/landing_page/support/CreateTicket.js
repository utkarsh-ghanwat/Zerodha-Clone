import React from 'react'

function CreateTicket() {
    return (
        <div>
            <h3 style={{ marginLeft: "100px" }}>To create a ticket, select a relevent topic</h3>
            <div className='row mb-5'>
                <div className='col-1'></div>
                <div className='col ticket-links'>
                    <h5><i class="fa-solid fa-circle-plus fa-1x"></i>Account opening</h5>
                    <a href="/">Online Account Opening</a><br></br>
                    <a href="/">Offline Account Opening</a><br></br>
                    <a href="/">Company, Partnership and HUF Account <br></br>Opening</a><br></br>
                    <a href="/">NRI Account Opening</a><br></br>
                    <a href="/">Charges at Zerodha</a><br></br>
                    <a href="/">Zerodha IDFC FIRST Bank 3-in-1 Account</a><br></br>
                    <a href="/">Getting Started</a><br></br>
                </div>
                <div className='col ticket-links'>
                    <h5><i class="fa-regular fa-circle-user fa-1x"></i>Your Zerodha Account</h5>
                    <a href="/">Login Credentials</a><br></br>
                    <a href="/">Account Modification and Segment Addition</a><br></br>
                    <a href="/">DP ID and bank details</a><br></br>
                    <a href="/">Your Profile</a><br></br>
                    <a href="/">Transfer and conversion of shares</a><br></br>

                </div>
                <div className='col ticket-links'>
                    <h5><i class="fa-solid fa-users fa-1x"></i>Your Zerodha Account</h5>
                    <a href="/">Margin/leverage, Product and Order types</a><br></br>
                    <a href="/">Kite Web and Mobile</a><br></br>
                    <a href="/">Trading FAQss</a><br></br>
                    <a href="/">Corporate Actions</a><br></br>
                    <a href="/">Sentinel</a><br></br>
                    <a href="/">Kite API</a><br></br>
                    <a href="/">Pi and other platforms</a><br></br>
                    <a href="/">Stockreports+</a><br></br>
                    <a href="/">GTT</a><br></br>

                </div>
                <div className='col-1'></div>
            </div>

            <div className='row mt-5'>
                <div className='col-1'></div>
                <div className='col ticket-links'>
                    <h5><i class="fa-solid fa-money-bill fa-1x"></i>Funds</h5>
                    <a href="/">Adding Funds</a><br></br>
                    <a href="/">Fund Withdrawal</a><br></br>
                    <a href="/">eMandates <br></br>Opening</a><br></br>
                    <a href="/">Adding Bank Accounts</a><br></br>
                </div>
                <div className='col ticket-links'>
                    <h5><i class="fa-regular fa-circle fa-1x"></i>Console</h5>
                    <a href="/">Reports</a><br></br>
                    <a href="/">Ledger</a><br></br>
                    <a href="/">Portfolio</a><br></br>
                    <a href="/">60 Day Challenge</a><br></br>
                    <a href="/">IPO</a><br></br>
                    <a href="/">Referral Program</a><br></br>
                </div>
                <div className='col ticket-links'>
                    <h5><i class="fa-regular fa-circle fa-1x"></i>Coin</h5>
                    <a href="/">Understanding Mutual Funds</a><br></br>
                    <a href="/">About Coin</a><br></br>
                    <a href="/">Buying and Selling through Coin</a><br></br>
                    <a href="/">Starting an SIP</a><br></br>
                    <a href="/">Managing your Portfolio</a><br></br>
                    <a href="/">Coin App</a><br></br>
                    <a href="/">Moving to Coin</a><br></br>
                    <a href="/">Government Securities</a><br></br>

                </div>
                <div className='col-1'></div>
            </div>
        </div>
    );
}

export default CreateTicket;
