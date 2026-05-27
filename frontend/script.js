const apiUrl = 'http://localhost:3000/sessions';

const form = document.getElementById('sessionForm');

const table = document.getElementById('sessionTable');


// LISTAR SESSÕES
async function loadSessions() {

    const response = await fetch(apiUrl);

    const sessions = await response.json();

    table.innerHTML = '';

    sessions.forEach(session => {

        table.innerHTML += `
            <tr>
                <td>${session.id}</td>
                <td>${session.date}</td>
                <td>${session.room}</td>
                <td>${session.stake}</td>
                <td>${session.profit}</td>
            </tr>
        `;

    });

}


// CADASTRAR SESSÃO
form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const session = {

        date: document.getElementById('date').value,
        room: document.getElementById('room').value,
        game_type: document.getElementById('game_type').value,
        stake: document.getElementById('stake').value,
        buy_in: document.getElementById('buy_in').value,
        cash_out: document.getElementById('cash_out').value,
        profit: document.getElementById('profit').value,
        notes: document.getElementById('notes').value

    };

    await fetch(apiUrl, {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(session)

    });

    form.reset();

    loadSessions();

});


// CARREGAR AO INICIAR
loadSessions();