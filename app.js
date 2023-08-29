import manipularArray from "./utils/manipularArray.js"


let array = []

// Loop para pegar o input do usuário até que ele digite "sair"
while (true) {
    // Chama a função para pegar o input do usuário
    manipularArray.getEntrada(array)
    // Verifica se o último elemento do array é "sair"
    if (array[array.length - 1] === "SAIR") {
        // Se for, remove o último elemento do array e sai do loop
        array.pop()
        break
    }
}
// Chama a função para imprimir o array
manipularArray.printArray(array)