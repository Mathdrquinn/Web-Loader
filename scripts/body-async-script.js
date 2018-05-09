(() => {
    const label = 'external body async script';
    window.bigSyncDelay();
    window.writeLog(label, "async");
})();