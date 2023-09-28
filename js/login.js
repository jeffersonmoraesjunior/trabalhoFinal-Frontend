function logar() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var remember_me = document.getElementById("remember-me").checked;

  if (verifyUser(email, password) || (email == "admin@aedo.com" && password == "123")) {
    localStorage.setItem("acesso", true);

    if (remember_me == true) {
      localStorage.setItem("remember_me", true);
      localStorage.setItem("remember_me_user", email);
      localStorage.setItem("remember_me_pass", password);
    } else {
      localStorage.setItem("remember_me", false);
      localStorage.setItem("remember_me_user", email);
    }

    // Evite o envio do formulário padrão
    event.preventDefault();
    // sendEmail();

    localStorage.setItem("paginaAtual", "index");
    location.replace("index.html");
  } else {
    alert("Usuario ou Senha Invalidos!");
  }
}

function cadastrar() {
  event.preventDefault();
  // event.preventDefault();
  if (
    document.getElementById("userName").value != "" &&
    document.getElementById("email").value != "" &&
    document.getElementById("password").value != "" &&
    document.getElementById("userCity").value != "" &&
    document.getElementById("userState").value != "" &&
    document.getElementById("userAddress").value != "" &&
    document.getElementById("inputZip").value != "" &&
    document.getElementById("gridCheck").checked == true
  ) {

    var user = {
      name: document.getElementById("userName").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      userCity: document.getElementById("userCity").value,
      userState: document.getElementById("userState").value,
      userAddress: document.getElementById("userAddress").value,
      userAddress2: document.getElementById("userAddress2").value,
      inputZip: document.getElementById("inputZip").value
    };

    if (userExist(user) === false) {
      var users = JSON.parse(localStorage.getItem("users")) || [];
      // var users = get ? [get, user] : [user];
      // users = [get];
      users.push(user);

      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("acesso", true);
      localStorage.setItem("remember_me_user", user.email);
      localStorage.setItem("remember_me_pass", user.password);

      localStorage.setItem("paginaAtual", "index");
      location.replace('index.html');
    } else {
      alert("Usuário já cadastrado!");
    }
  }
}

// function sendEmail() {
//   // code fragment
//   var data = {
//     service_id: 'service_pi9t05n',
//     template_id: 'template_4vbxf8c',
//     user_id: 'gkCryeOMPzBA-zYM6',
//     template_params: {
//       'username': 'James',
//       'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
//     }
//   };

//   $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
//     type: 'POST',
//     data: JSON.stringify(data),
//     contentType: 'application/json'
//   }).done(function () {
//     alert('Your mail is sent!');
//   }).fail(function (error) {
//     alert('Oops... ' + JSON.stringify(error));
//   });
//   // code fragment
// }

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