// test.js

import { fetchBidsForAdSlot, displayAd } from './main.js';

// Function to initialize the test environment
function initializeTest() {
    // Add event listener to fetch bids button
    const fetchBidsButton = document.getElementById('fetch-bids-button');
    fetchBidsButton.addEventListener('click', () => {
        fetchAndDisplayBids();
    });
}

// Function to fetch and display bids for ad slot 1
async function fetchAndDisplayBids() {
    // Fetch bids for ad slot 1
    const bidData = await fetchBidsForAdSlot('ad-slot-1');
    // Update HTML with bid information
    updateHTMLWithBids(bidData);
}

// Function to update HTML with bid information
function updateHTMLWithBids(bidData) {
    const bidContainer = document.getElementById('bid-container');
    bidContainer.innerHTML = ''; // Clear previous bids
    
    bidData.forEach(bid => {
        const bidElement = document.createElement('div');
        bidElement.textContent = `Bidder: ${bid.bidder}, Price: ${bid.price}, Creative: ${bid.creative}`;
        bidContainer.appendChild(bidElement);
    });
}

// Initialize test environment
initializeTest();
