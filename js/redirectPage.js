function menuRedirect(site) {
  if (site === "about") {
    window.location.href = "about.html";
  }
  if (site === "index") {
    window.location.href = "index.html";
  }
  if (site === "login") {
    const userLogged = localStorage.getItem("acesso");
    if (userLogged === "true") {
      localStorage.setItem("acesso", "false");
      document.getElementById("login").innerHTML = "Entrar";
      document.getElementById("sigin").removeAttribute("hidden");
    }
    window.location.href = "login.html";
  }
  if (site === "formulario") {
    window.location.href = "formulario.html";
  }
}
