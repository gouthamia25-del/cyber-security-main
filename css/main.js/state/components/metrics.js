function updateMetricsComponent() {
    const container = document.getElementById('metrics-container');
    container.innerHTML = `
        <div class="card"><div><h5>Infra Health</h5><h2>5%</h2></div></div>
        <div class="card"><div><h5>Active Critical</h5><h2>20</h2></div></div>
        <div class="card"><div><h5>Active High</h5><h2>19</h2></div></div>
        <div class="card"><div><h5>Mitigated</h5><h2>0</h2></div></div>
    `;
}