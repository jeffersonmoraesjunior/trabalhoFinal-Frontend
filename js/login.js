function logar() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if (email.value == "admin@aedo.com" && password.value == "123") {
        localStorage.setItem("acesso", true);

        alert("Usuario Autenticado.");

        window.location.href = "index.html";
    } else {
        alert("Usuario ou Senha Invalidos!");
    }
}