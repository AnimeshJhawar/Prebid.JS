# Prebid Header Bidding Implementation
This project provides a robust Prebid-based header bidding solution, designed to optimize ad revenue, minimize page load impacts, and enhance user experience through efficient ad auctions.

## Key Functionalities
1. **Dynamic Bid Adjustments**: Adjust bids in real-time based on historical auction performance to maximize revenue.
2. **Asynchronous Loading**: Scripts and ad units are loaded asynchronously to reduce impact on page load times.
3. **Server-to-Server Bidding**: Moves bidding processing to the server to reduce client-side load.
4. **Ad Unit Configuration**: Allows detailed control over ad placements and settings.
5. **Test Simulation**: Provides a frontend to simulate and visualize the bidding process.

## Configuration
Modify settings in `/src/config/prebidConfig.js` and `/src/adUnits/adUnitConfig.js` to fit your specific requirements.

## Testing
To test the implementation:
1. Open `/test/index.html` in a web browser.
2. Use the "Fetch Bids" button to simulate and display the bidding process.

This platform ensures GDPR compliance and supports multiple ad servers, making it suitable for a wide range of publishers.

### Installation
Run the following command in the root directory to install dependencies:
`npm install`
