// Configuration settings for Prebid.js
export function loadPrebidConfig() {
    window.pbjs = window.pbjs || {};
    pbjs.que = pbjs.que || [];

    pbjs.que.push(() => {
        pbjs.setConfig({
            userSync: {
                iframeEnabled: true
            },
            priceGranularity: 'dense',
            enableSendAllBids: true,
            bidderSequence: 'random', // Randomize bidder sequence
            s2sConfig: {
                accountId: '12345',
                enabled: true,
                bidders: ['appnexus', 'rubicon', 'pubmatic'],
                endpoint: 'https://prebid.adnxs.com/pbs/v1/auction',
                timeout: 500, // Adjusted for server-side execution
                adapter: 'prebid_server'
            },
            cache: {
                url: 'https://prebid.adnxs.com/pbc/v1/cache'
            }
        });
    });
}
