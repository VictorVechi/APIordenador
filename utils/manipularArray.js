import chalk from "chalk";
import input from "readline-sync"

class manipularArray {
    getEntrada(arr) {
        // Pega o input do usuário
        let entrada = input.question(chalk.greenBright("Digite o comando do css:\t"))

        // Verifica se o input é "sair"
        if (entrada.toUpperCase() === "SAIR") {
            // Se for, retorna uma mensagem de saída e a palavra "sair" em maiúsculo para o array
            console.log(chalk.redBright("Saindo..."))
            arr.push(entrada.toUpperCase())
        } else {
            // Se não for, adiciona o input normalmente ao array
            arr.push(entrada)
        }
    }

    printArray(arr) {
        // Ordena o array
        arr = arr.sort()
        console.log(chalk.yellowBright("Comandos CSS:"))
        // Imprime o array ordenado
        arr.forEach(element => {
            console.log(chalk.blueBright(element))
        })
    }
}

export default new manipularArray()

