import React from 'react';
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

function ProductsPage() {
  return (
    <div>
      <Hero />
      <LeftSection imageURL="Media/Images/kite.png" 
        productName="Kite" 
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
        tryDemo="" learnMore="" googlePlay="" appStore="" />

        <RightSection imageURL="Media/Images/console.png" productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations" tag="learn More" />

        <LeftSection imageURL="Media/Images/coin.png" 
        productName="coin" 
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.." 
        tryDemo="" learnMore="" googlePlay="" appStore="" />

        <RightSection imageURL="Media/Images/kiteconnect.png" productName="Kite connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." tag="Kite connect" /> 
      
      <Universe />
    </div>
  );
}

export default ProductsPage;
