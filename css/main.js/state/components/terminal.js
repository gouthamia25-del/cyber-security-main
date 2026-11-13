function addLogToTerminal(timestamp, ip, attack) {
    const terminal = document.getElementById('terminal');
    const log = document.createElement('div');
    log.style.marginBottom = "8px";
    log.innerHTML = `
        <span style="color:var(--text-muted)">[${timestamp}]</span> 
        <span style="color:var(--color-amber)">alert_kernel: SEV="${attack.severity}"</span><br>
        <span>SRC="${ip}" MSG="${attack.type}"</span>
    `;
    terminal.appendChild(log);
    terminal.scrollTop = terminal.scrollHeight;
}