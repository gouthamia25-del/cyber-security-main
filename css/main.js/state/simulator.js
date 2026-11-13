let logInterval;

function startSimulation() {
    // Generate initial items
    renderNewIncident();
    renderNewIncident();
    
    // Continuous dynamic simulation stream loop
    logInterval = setInterval(renderNewIncident, 4000);
}

function stopSimulation() {
    clearInterval(logInterval);
}