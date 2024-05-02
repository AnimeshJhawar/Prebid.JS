// Utility to dynamically load scripts
export function loadScript(url, async = true, defer = true) {
    const script = document.createElement('script');
    script.src = url;
    script.async = async;
    script.defer = defer;
    document.head.appendChild(script);
}

// Asynchronously load additional non-critical scripts
export function loadAdditionalScripts() {
    const urls = [
        'https://cdn.example.com/additional-library.js'
    ];
    urls.forEach(url => loadScript(url));
}
