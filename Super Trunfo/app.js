var carta1 = {
    nome: "Bulbassauro",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
};
  
var carta2 = {
    nome: "Darth Vader",
    atributos: {
      ataque: 9,
      defesa: 8,
      magia: 2
    }
};
  
var carta3 = {
    nome: "Shiryu",
    atributos: {
      ataque: 5,
      defesa: 9,
      magia: 10
    }
};
  
//adicionando os objetos no array
var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;
  
//criar uma função para embaralhar as cartas
function sortearCarta() {
    //gerar um número randomico
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 3);
    //laço de repetição while
    //enquato uma condição1 for igual a condição2
    //ficar executando a sequência até ser falsa a condição
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 3);
    }

    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    exibirOpcoes();
}
  
function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
  
    // adicionar um tag HTML pelo JS para aparecer os atributos na tela da página
    var opcoesTexto = "";
  
    // para cada elemento x dentro de uma lista
    // irá fazer uma coisa
    for (var atributo in cartaJogador.atributos) {
        //somar as 3 tags de input e irá aparecer os atributos
        opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}
  
//Criar função obter o atributo selecionado
function obtemAtributoSelecionado() {
var radioAtributos = document.getElementsByName("atributo");
  
//percorrer dentro do radioAtributos
for (var i = 0; i < radioAtributos.length; i++) {
    //se o radioAtributos estiver marcado
    if (radioAtributos[i].checked == true) {
    //retornar o valor marcado
        return radioAtributos[i].value;
    }
    }
}
  
function jogar() {
var atributoSelecionado = obtemAtributoSelecionado();
var elementoResultado = document.getElementById("resultado");
var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "Você venceu";
    } else if (valorCartaJogador < valorCartaMaquina) {
        elementoResultado.innerHTML = "Você perdeu, a máquina venceu";
    } else {
        elementoResultado.innerHTML = "Empatou";
    }
  
    console.log(cartaMaquina);
}