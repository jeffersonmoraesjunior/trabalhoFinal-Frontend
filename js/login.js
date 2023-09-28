function logar() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var remember_me = document.getElementById("remember-me").checked;

  if (verifyUser(email, password) || (email == "admin@aedo.com" && password == "123")) {
    localStorage.setItem("acesso", true);

    if(remember_me == true){
      localStorage.setItem("remember_me", true);
      localStorage.setItem("remember_me_user", email);
      localStorage.setItem("remember_me_pass", password);
    } else{      
      localStorage.setItem("remember_me", false);
    }

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

    var user = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      userCity: document.getElementById("userCity").value,
      userState: document.getElementById("userState").value,
      userAddress: document.getElementById("userAddress").value,
      userAddress2: document.getElementById("userAddress2").value,
      inputZip: document.getElementById("inputZip").value,
    };

    if (userExist(user) === false) {
      var users = JSON.parse(localStorage.getItem("users")) || [];
      // var users = get ? [get, user] : [user];
      // users = [get];
      users.push(user);

      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("acesso", true);
      // alert(get2[1].email);
    } else {
      alert("Usuário já cadastrado!");
    }
  }
}

function userExist(user) {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === user.email) {
      return true;
    }
  }
  return false;
}

function verifyUser(email, password) {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].email.trim().toLowerCase() === email.trim().toLowerCase() && users[i].password === password) {
      return true;
    }
  }
  return false;
}