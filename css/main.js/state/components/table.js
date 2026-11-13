function addRowToTable(timestamp, ip, attack) {
    const tableBody = document.getElementById('incident-table-body');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td style="padding:8px 0; color:var(--text-muted)">${timestamp}</td>
        <td>${ip}</td>
        <td style="font-weight:bold;">${attack.type}</td>
    `;
    if(tableBody.children.length > 4) tableBody.removeChild(tableBody.lastChild);
    tableBody.insertBefore(row, tableBody.firstChild);
}