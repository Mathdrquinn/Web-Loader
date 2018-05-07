(() => {
    const label = 'external head async script';
    window.bigSyncDelay();
    window.writeLog(label, "async");
})();