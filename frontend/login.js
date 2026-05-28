const form =
    document.getElementById('loginForm');


// LOGIN
form.addEventListener('submit', (e) => {

    e.preventDefault();

    const username =
        document.getElementById('username').value;

    const password =
        document.getElementById('password').value;

    const savedUser =
        localStorage.getItem('user');

    const savedPassword =
        localStorage.getItem('password');


    // LOGIN PADRÃO
    if (
        username === 'admin'
        &&
        password === '123456'
    ) {

        localStorage.setItem(
            'logged',
            'true'
        );

        window.location.href =
            'index.html';

        return;
    }


    // LOGIN USUÁRIO CADASTRADO
    if (
        username === savedUser
        &&
        password === savedPassword
    ) {

        localStorage.setItem(
            'logged',
            'true'
        );

        window.location.href =
            'index.html';

    } else {

        document.getElementById(
            'errorMessage'
        ).innerText =
            'Usuário ou senha inválidos!';
    }

});


// REGISTRAR USUÁRIO
function registerUser() {

    const username =
        prompt('Digite um novo usuário:');

    if (!username) {

        alert('Usuário inválido.');

        return;
    }

    const password =
        prompt('Digite uma senha:');

    if (!password) {

        alert('Senha inválida.');

        return;
    }

    localStorage.setItem(
        'user',
        username
    );

    localStorage.setItem(
        'password',
        password
    );

    alert('Usuário criado com sucesso!');
}