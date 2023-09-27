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

function cadastrar() {
  // event.preventDefault();
  if (
    document.getElementById("email").value != "" &&
    document.getElementById("password").value != "" &&
    document.getElementById("userCity").value != "" &&
    document.getElementById("userState").value != "" &&
    document.getElementById("userAddress").value != "" &&
    document.getElementById("inputZip").value != "" &&
    document.getElementById("gridCheck").checked == true
  ) {

    const user = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      userCity: document.getElementById("userCity").value,
      userState: document.getElementById("userState").value,
      userAddress: document.getElementById("userAddress").value,
      userAddress2: document.getElementById("userAddress2").value,
      inputZip: document.getElementById("inputZip").value,
    };

    if(userExist(user) === false){
      var users = [];
      var get = JSON.parse(localStorage.getItem("users"));
      users = [get];
      users.push(user);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("acesso", true);
    // alert(get2[1].email);
    } else{
        alert("Usuário já cadastrado!");
    }
  }

  function userExist(user) {
    var get = JSON.parse(localStorage.getItem("users"));
    array.forEach(element => {
        if(element )
    });
    for (var i = 0; i < get.length; i++) {
      if (get[i].email === user.email) {
        alert("Usuário nao cadastrado!");
        return true;
      }
    }
    alert("Usuário já cadastrado!");
    return false;
  }
}
