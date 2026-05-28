const API_URL = 'http://localhost:3000/sessions';

const form =
    document.getElementById('sessionForm');

const tableBody =
    document.getElementById('sessionsTableBody');


// LISTAR SESSÕES
async function loadSessions() {

    const response = await fetch(API_URL);

    const sessions = await response.json();

    tableBody.innerHTML = '';

    sessions.forEach(session => {

        tableBody.innerHTML += `
            <tr>

                <td>${session.session_date}</td>

                <td>${session.room}</td>

                <td>${session.game_type}</td>

                <td>${session.stake}</td>

                <td>R$ ${session.buy_in}</td>

                <td>R$ ${session.cash_out}</td>

                <td class="
                    ${session.profit >= 0
                        ? 'text-success'
                        : 'text-danger'}
                ">
                    R$ ${session.profit}
                </td>

                <td>${session.notes || ''}</td>

                <td>
                    <button
                        onclick="deleteSession(${session.id})"
                        class="btn btn-danger btn-sm"
                    >
                        Excluir
                    </button>
                </td>

            </tr>
        `;
    });
}


// CADASTRAR
form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const buyIn =
        parseFloat(
            document.getElementById('buy_in').value
        );

    const cashOut =
        parseFloat(
            document.getElementById('cash_out').value
        );

    const data = {

        session_date:
            document.getElementById('session_date').value,

        room:
            document.getElementById('room').value,

        game_type:
            document.getElementById('game_type').value,

        stake:
            document.getElementById('stake').value,

        buy_in: buyIn,

        cash_out: cashOut,

        profit: cashOut - buyIn,

        notes:
            document.getElementById('notes').value
    };

    await fetch(API_URL, {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)
    });

    form.reset();

    loadSessions();
});


// EXCLUIR
async function deleteSession(id) {

    await fetch(`${API_URL}/${id}`, {

        method: 'DELETE'
    });

    loadSessions();
}


// CARREGAR AO INICIAR
loadSessions();