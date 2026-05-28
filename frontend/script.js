const API_URL = 'http://localhost:3000/sessions';

const form = document.getElementById('sessionForm');

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
                <td>${session.id}</td>
                <td>${session.game_type}</td>
                <td>R$ ${session.buy_in}</td>
                <td>R$ ${session.cash_out}</td>
                <td>${session.session_date}</td>

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


// CADASTRAR SESSÃO
form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const data = {

        game_type:
            document.getElementById('game_type').value,

        buy_in:
            document.getElementById('buy_in').value,

        cash_out:
            document.getElementById('cash_out').value,

        session_date:
            document.getElementById('session_date').value
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


// CARREGAR AO ABRIR
loadSessions();