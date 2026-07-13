// Universe.js
import React from 'react';

function Universe() {
  return (

    <div>


    <div>
      <div className='text-center' style={{ margin: "20px" }}>
          <p className='mb-5'>Want to know more about our technology stack? Check out the <a href="#">Zerodha.tech blog.</a></p>
          <h3 className='mt-5'>The Zerodha Universe</h3>
          <p className='mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
      </div>
      </div>



      <div>

          <div className='row mt-10 mb-10 '>
            <div className='col'></div>
            <div className='col'>
              <img className='mt-5' src="Media\Images\zerodhaFundhouse.png" style={{ width: "70%" }}></img>
              <p className='mt-4 text-muted'>Our asset management venture
                that is creating simple and transparent index
                funds to help you save for your goals.</p>
              <img className='mt-5' src="Media\Images\streakLogo.png" style={{ width: "70%" }}></img>
              <p className='mt-4 text-muted'>Systematic trading platform
                that allows you to create and backtest
                strategies without coding.</p>

            </div>
            <div className='col'>
              <img className='mt-5' src="Media/Images/sensibullLogo.svg" style={{ width: "70%" }}></img>
              <p className='mt-5 text-muted'>Options trading platform that lets you
                create strategies, analyze positions, and examine
                data points like open interest, FII/DII, and mor</p>
              <img className='mt-5' src="Media\Images\smallcaseLogo.png" style={{ width: "70%" }}></img>
              <p className='mt-5 text-muted'>Thematic investing platform
                that helps you invest in diversified
                baskets of stocks on ETFs.</p>

            </div>
            <div className='col'>
              <img className='mt-4' src="Media\Images\tijori.svg" style={{ width: "70%" }}></img>
              <p className='mt-4 text-muted'>Investment research platform
                that offers detailed insights on stocks,
                sectors, supply chains, and more.</p>
              <img className='mt-5' src="Media\Images\dittoLogo.png" style={{ width: "70%" }}></img>
              <p className='mt-5 text-muted'>Personalized advice on life
                and health insurance. No spam
                and no mis-selling.</p>

            </div>
            <div className='col'></div>
      </div>

    </div>


  </div>  
  );
}

export default Universe;