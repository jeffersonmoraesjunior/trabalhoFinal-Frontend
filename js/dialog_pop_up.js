function aceitarBotao() {
    //puxando o Id do botão
    var aceitarBtn = document.getElementById("ctaBtn");
    
    //estou pegando todo o Box onde está o que preciso fechar
    aceitarBtn = addEventListener("click", function (){
        //criando um var para pegar todo o box e fecha-lo
        var dialog = this.document.getElementById("dialog"); //this. (este documento)
        dialog.style.display = "none"; //verbo fechar
    });
};