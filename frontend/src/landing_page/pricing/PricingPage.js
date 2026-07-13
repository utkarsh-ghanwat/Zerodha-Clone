import React from 'react'
import Hero from './Hero'
import Brokerage from "./Brokerage"
import OpenAccount from '../OpenAccount'

function PricingPage() {
    return (
        <div>
            <Hero></Hero>
            <OpenAccount></OpenAccount>
            <Brokerage></Brokerage>
        </div>
    );
}

export default PricingPage;

