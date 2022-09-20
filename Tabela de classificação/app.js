//         chave.  valor.
var rafa = {nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0};
var paulo = {nome: "Paulo", vitorias: 1, empates: 3, derrotas: 1, pontos: 0};
var gui = {nome: "Gui", vitorias: 1, empates: 1, derrotas: 2, pontos: 0};
var bruno = {nome: "Bruno", vitorias: 1, empates: 1, derrotas: 2, pontos: 0};

//função para calcular os pontos
function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos; 
}

//chamar a função para atribuir o valor total de pontos
rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);
bruno.pontos = calculaPontos(bruno);

//criar uma lista de jogadores 
var jogadores = [rafa, paulo, gui, bruno];

//criar uma função que irá exibir os jogadores em um quadro na tela
//dentro do laço "for" irá percorrer a lista de jogadores
function exibeJogaresNaTela(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias +"</td>"
        elemento += "<td>" + jogadores[i].empates +"</td>"
        elemento += "<td>" + jogadores[i].derrotas +"</td>"
        elemento += "<td>" + jogadores[i].pontos +"</td>"
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota()'>Derrota</button></td>"
        elemento += "</tr>"
    }

    //converter do HTML para o JavaScript a tabela de jogadores
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
} 

//exibir na tela a tabela de jogadores
exibeJogaresNaTela(jogadores);

//Buscar o elemento onclick do HTML e
//criar uma função para adcionarVitoria() quando clicar no botão vitória
function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogaresNaTela(jogadores);
}

//Buscar o elemento onclick do HTML e
//criar uma função para adcionarEmpate() quando clicar no botão empate
function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogaresNaTela(jogadores);
}

//Buscar o elemento onclick do HTML e
//criar uma função para adcionarDerrota() quando clicar no botão derrota
function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.pontos = calculaPontos(jogador);
    exibeJogaresNaTela(jogadores);
}