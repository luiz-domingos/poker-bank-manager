if (
    localStorage.getItem('logged')
    !== 'true'
) {

    window.location.href =
        'login.html';
}


const API_URL =
    'http://localhost:3000/sessions';


const form =
    document.getElementById('sessionForm');

const tableBody =
    document.getElementById(
        'sessionsTableBody'
    );

let editingId = null;


// LISTAR SESSÕES
async function loadSessions() {

    const response =
        await fetch(API_URL);

    const sessions =
        await response.json();

    tableBody.innerHTML = '';


    // DASHBOARD
    document.getElementById(
        'totalSessions'
    ).innerText =
        sessions.length;

    let totalProfit = 0;

    let bestSession = 0;


    sessions.forEach(session => {

        totalProfit +=
            Number(session.profit);

        if (
            Number(session.profit)
            > bestSession
        ) {

            bestSession =
                Number(session.profit);
        }


        tableBody.innerHTML += `
            <tr>

                <td>
                    ${session.session_date}
                </td>

                <td>
                    ${session.room}
                </td>

                <td>
                    ${session.game_type}
                </td>

                <td>
                    ${session.stake}
                </td>

                <td>
                    R$ ${session.buy_in}
                </td>

                <td>
                    R$ ${session.cash_out}
                </td>

                <td class="
                    ${
                        session.profit >= 0
                        ? 'profit-positive'
                        : 'profit-negative'
                    }
                ">

                    R$ ${session.profit}

                </td>

                <td>
                    ${session.notes || ''}
                </td>

                <td>

                    <button
                        class="btn btn-warning btn-sm me-2"
                        onclick="editSession(${session.id})"
                    >

                        Editar

                    </button>

                    <button
                        class="btn btn-danger btn-sm"
                        onclick="
                            deleteSession(
                                ${session.id}
                            )
                        "
                    >

                        Excluir

                    </button>

                </td>

            </tr>
        `;
    });


    document.getElementById(
        'totalProfit'
    ).innerText =
        `R$ ${totalProfit}`;

    document.getElementById(
        'bestSession'
    ).innerText =
        `R$ ${bestSession}`;
}


// CADASTRAR / EDITAR
form.addEventListener(
    'submit',
    async (e) => {

        e.preventDefault();

        const buyIn =
            parseFloat(
                document.getElementById(
                    'buy_in'
                ).value
            );

        const cashOut =
            parseFloat(
                document.getElementById(
                    'cash_out'
                ).value
            );

        const profit =
            cashOut - buyIn;


        const data = {

            session_date:
                document.getElementById(
                    'session_date'
                ).value,

            room:
                document.getElementById(
                    'room'
                ).value,

            game_type:
                document.getElementById(
                    'game_type'
                ).value,

            stake:
                document.getElementById(
                    'stake'
                ).value,

            buy_in: buyIn,

            cash_out: cashOut,

            profit: profit,

            notes:
                document.getElementById(
                    'notes'
                ).value
        };


        // UPDATE
        if (editingId) {

            await fetch(

                `${API_URL}/${editingId}`,

                {

                    method: 'PUT',

                    headers: {
                        'Content-Type':
                            'application/json'
                    },

                    body: JSON.stringify(data)
                }
            );

            editingId = null;

        } else {

            // CREATE
            await fetch(API_URL, {

                method: 'POST',

                headers: {
                    'Content-Type':
                        'application/json'
                },

                body: JSON.stringify(data)
            });
        }


        form.reset();

        loadSessions();
    }
);


async function deleteSession(id) {

    const confirmDelete =
        confirm(
            'Deseja realmente excluir esta sessão?'
        );

    if (!confirmDelete) {

        return;
    }

    await fetch(

        `${API_URL}/${id}`,

        {
            method: 'DELETE'
        }
    );

    loadSessions();
}


// EDITAR
async function editSession(id) {

    const response =
        await fetch(
            `${API_URL}/${id}`
        );

    const session =
        await response.json();


    editingId = id;


    document.getElementById(
        'session_date'
    ).value =
        session.session_date;

    document.getElementById(
        'room'
    ).value =
        session.room;

    document.getElementById(
        'game_type'
    ).value =
        session.game_type;

    document.getElementById(
        'stake'
    ).value =
        session.stake;

    document.getElementById(
        'buy_in'
    ).value =
        session.buy_in;

    document.getElementById(
        'cash_out'
    ).value =
        session.cash_out;

    document.getElementById(
        'profit'
    ).value =
        session.profit;

    document.getElementById(
        'notes'
    ).value =
        session.notes;
}


// CALCULAR LUCRO
const buyInInput =
    document.getElementById('buy_in');

const cashOutInput =
    document.getElementById('cash_out');

const profitInput =
    document.getElementById('profit');


function calculateProfit() {

    const buyIn =
        parseFloat(
            buyInInput.value
        ) || 0;

    const cashOut =
        parseFloat(
            cashOutInput.value
        ) || 0;

    const profit =
        cashOut - buyIn;


    profitInput.value =
        profit;


    if (profit >= 0) {

        profitInput.style.color =
            '#22c55e';

    } else {

        profitInput.style.color =
            '#ef4444';
    }
}


buyInInput.addEventListener(
    'input',
    calculateProfit
);

cashOutInput.addEventListener(
    'input',
    calculateProfit
);


// INICIAR
loadSessions();