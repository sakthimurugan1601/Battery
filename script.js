document.getElementById('check-battery').addEventListener('click', function() {
    if (navigator.getBattery) {
        navigator.getBattery().then(function(battery) {
            let level = Math.round(battery.level * 100);
            let status = battery.charging ? 'Charging' : 'Discharging';
            
            document.getElementById('battery-level').style.width = `${level}%`;
            document.getElementById('battery-level-text').textContent = `Level: ${level}%`;
            document.getElementById('battery-status-text').textContent = `Status: ${status}`;
        });
    } else {
        alert('Battery Status API not supported on this browser.');
    }
});
