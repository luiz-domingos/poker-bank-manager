const form =
    document.getElementById('loginForm');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const username =
        document.getElementById('username').value;

    const password =
        document.getElementById('password').value;

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

    } else {

        document.getElementById(
            'errorMessage'
        ).innerText =
            'Usuário ou senha inválidos!';
    }

});