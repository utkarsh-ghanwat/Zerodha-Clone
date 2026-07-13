import React from "react";

function Awards() {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col">
                    <img src="/Media/Images/largestBroker.svg" alt="random img" className="mt-10" />
                </div>
                <div className="col">
                    <h2>Largest stock broker in India</h2>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading & investing in:</p>

                    <ul className="row">
                        <li className="col-6">Futures & Options</li>
                        <li className="col-6">Stocks & IPOs</li>
                        <li className="col-6">Commodity derivatives</li>
                        <li className="col-6">Direct mutual funds</li>
                        <li className="col-6">Currency derivatives</li>
                        <li className="col-6">Bonds</li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Awards;