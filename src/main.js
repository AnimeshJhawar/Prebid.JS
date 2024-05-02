// Main entry point for Prebid.js
import { loadPrebidConfig } from './config/prebidConfig';
import { AuctionManager } from './auction/auctionManager';
import { dynamicLoader } from './utils/dynamicLoader';
import { applyBidAdjustments } from './bids/bidAdjustments';
import { adUnits } from './adUnits/adUnitConfig';
import { loadAdUnits } from './dynamicLoader.js';

document.addEventListener('DOMContentLoaded', function () {
    dynamicLoader(); // Loads the Prebid.js library and other necessary scripts
    loadPrebidConfig(); // Load and set Prebid configurations

    const auctionManager = new AuctionManager();
    auctionManager.initAuctions(adUnits);

    window.pbjs = window.pbjs || {};
    window.pbjs.que = window.pbjs.que || [];
    window.pbjs.que.push(() => {
        applyBidAdjustments(auctionManager); // Apply dynamic bid adjustments based on historical data
    });
});

export function fetchDataAndUpdateHTML() {
    // Placeholder function to fetch data from server
    const adUnits = ['adUnit1', 'adUnit2']; // Example ad units
    loadAdUnits(adUnits); // Load ad units asynchronously
}