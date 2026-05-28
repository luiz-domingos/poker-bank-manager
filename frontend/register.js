const form =
    document.getElementById('registerForm');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const username =
        document.getElementById('username').value;

    const password =
        document.getElementById('password').value;

    const confirmPassword =
        document.getElementById(
            'confirmPassword'
        ).value;

    const message =
        document.getElementById('message');

    if (password !== confirmPassword) {

        message.innerText =
            'As senhas não coincidem.';

        message.classList.add('text-danger');

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

    message.innerText =
        'Conta criada com sucesso!';

    message.classList.remove('text-danger');

    message.classList.add('text-success');

    setTimeout(() => {

        window.location.href =
            'login.html';

    }, 1500);

});