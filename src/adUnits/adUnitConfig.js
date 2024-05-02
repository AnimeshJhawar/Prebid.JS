// Configure ad units with details for auctions
export const adUnits = [
    {
        code: 'div-gpt-ad-123456789-0',
        mediaTypes: {
            banner: { sizes: [[300, 250], [300, 600]] }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '1234567', bidFloor: 0.50 } },
            { bidder: 'rubicon', params: { accountId: '1234', siteId: '5678', zoneId: '9012', bidFloor: 0.75 } },
            { bidder: 'pubmatic', params: { publisherId: '12345', adSlot: '67890', bidFloor: 0.60 } }
        ]
    },
    {
        code: 'div-gpt-ad-987654321-0',
        mediaTypes: {
            banner: { sizes: [[728, 90], [970, 250]] }
        },
        bids: [
            { bidder: 'appnexus', params: { placementId: '9876543', bidFloor: 0.55 } },
            { bidder: 'rubicon', params: { accountId: '5678', siteId: '9012', zoneId: '3456', bidFloor: 0.80 } }
        ]
    }
];
