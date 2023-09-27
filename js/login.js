function logar() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if (email.value == "admin@aedo.com" && password.value == "123") {
        localStorage.setItem("acesso", true);

        // Evite o envio do formulário padrão
        event.preventDefault();

        location.replace("index.html");
    } else {
        alert("Usuario ou Senha Invalidos!");
    }
}