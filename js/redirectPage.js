function menuRedirect(site) {
  const userLogged = localStorage.getItem("acesso");

  if (userLogged === "true") {
    if (site === "about") {
      window.location.href = "about.html";
    }
    if (site === "index") {
      window.location.href = "index.html";
    }
    if (site === "login") {
      localStorage.setItem("acesso", "false");
      document.getElementById("login").innerHTML = "Entrar";
      document.getElementById("sigin").removeAttribute("hidden");
      window.location.href = "login.html";
    }
  } else {
    if (site === "formulario") {
      window.location.href = "formulario.html";
    }
    if (site === "login") {
      window.location.href = "login.html";
    }
  }
}
