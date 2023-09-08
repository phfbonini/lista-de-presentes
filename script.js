// script.js
const tableBody = document.querySelector('tbody');

fetch('csv/utensilios_cozinha.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n');
        for (let i = 1; i < rows.length; i++) {
            const columns = rows[i].split(',');
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><input type="checkbox" class="checkbox"></td>
                <td>${columns[0]}</td>
                <td>${columns[1]}</td>
            `;
            tableBody.appendChild(row);
        }
    });
