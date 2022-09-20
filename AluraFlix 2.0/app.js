function adicionarFilme() {
    //Buscar a informação que está dentro do campo input
    var filmeFavorito = document.getElementById("filme").value;

    //validar a img para ver se é do formato JPG
    //Verificar dentro da string se ela termina com um caracter específico usando o "endsWith()"
    if (filmeFavorito.endsWith(".JPG") || filmeFavorito.endsWith(".jpg")) {
        listaFilmesNaTela(filmeFavorito);
    } else {
        console.log("Endereço de filme inválido!");
    }

    //Limpar o campo depois que o usuário adicionar a capa do filme
    document.getElementById("filme").value = "";
}

function listaFilmesNaTela (filme) {
    //Exibir imagem do filme na tela
    var elementoFilmeFavorito = "<img src=" + filme + ">";

    //Buscar informações do elemento ID "listaFilmes"
    //E adicionar dentro de "listasFilmes" o elementoFilmeFavorito
    var elementoListaFilmes = document.getElementById("listaFilmes");
    //Adicionar elementoFilmeFavorito dentro do elementoListaFilmes
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}
