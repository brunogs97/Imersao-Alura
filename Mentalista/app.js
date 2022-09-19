//Usar o "parseInt" para converter o valor randomico em inteiro
var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    //Uma menssagem que irá informar o resultado na tela
    var elementoResultado = document.getElementById("resultado");

    //Buscar informações do elemetno ID "valor"
    //Usar parseInt para converter os valores em inteiro
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);

    //Verificar se o chute é igual ao numeroSecreto e se o usuário digitou um núm. de 0 a 10
    if (chute == numeroSecreto) {
        //puxar a menssagem do HTML para aparecer na página
        elementoResultado.innerHTML = "Você acertou";
    } else if (chute < 0 || chute > 10) {
        elementoResultado.innerHTML = "Você deve digitar um número entre 0 a 10!";
    } else {
        if (chute < numeroSecreto) {
            elementoResultado.innerHTML = "Você errou, o valor é maior!"
        } else {
            elementoResultado.innerHTML = "Você errou, o valor é menor"
        }
    }
}