import manipularArray from "./utils/manipularArray.js"
import chalk from "chalk"

let array = []
let entrada = ""
// Loop para pegar o input do usuário até que ele digite "sair"
while (entrada !== "SAIR") {
    // Chama a função para pegar o input do usuário
    entrada = manipularArray.getEntrada()

    // Verifica se o input é vazio
    if(entrada === "") {
        console.log(chalk.redBright("Comando inválido!"))
        continue
    } // Verifica se o input é um número
    else if (!isNaN(entrada)) {
        console.log(chalk.redBright("Números não são válidos!"))
        continue
    }
    // Adiciona o input do usuário no array
    array.push(entrada)
    // Verifica se o último elemento do array é "sair"
    if (array[array.length - 1] === "SAIR") {
        // Se for, remove o último elemento do array e sai do loop
        array.pop()
    }
}
// Chama a função para imprimir o array
manipularArray.printArray(array)