function menuRedirect(site) {
  const userLogged = localStorage.getItem("acesso");

  if (userLogged === "true") {
    if (site === "about") {
      if (site !== (localStorage.getItem("paginaAtual"))) {
        window.location.href = "about.html";
        localStorage.setItem("paginaAtual", "about");
      }
    }
    if (site === "index") {
      if (site !== (localStorage.getItem("paginaAtual"))) {
        window.location.href = "index.html";
        localStorage.setItem("paginaAtual", "index");
      }
    }
    if (site === "login") {
      localStorage.setItem("acesso", "false");
      document.getElementById("login").innerHTML = "Entrar";
      document.getElementById("sigin").removeAttribute("hidden");
      if (site !== (localStorage.getItem("paginaAtual"))) {
        localStorage.setItem("paginaAtual", "login");
        window.location.href = "login.html";
      }
    }
  } else {
    if (site === "formulario") {
      if (site !== (localStorage.getItem("paginaAtual"))) {
        window.location.href = "formulario.html";
        localStorage.setItem("paginaAtual", "formulario");
      }
    }
    if (site === "login") {
      if (site !== (localStorage.getItem("paginaAtual"))) {
        window.location.href = "login.html";
        localStorage.setItem("paginaAtual", "login");
      }
    }
  }
}
