//Crie a const para a frase aqui
const guardarFrase = () => {

const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

const novaFrase = frase.replace("verde", "rosa").replace("azul", "laranja")

const temVerde = novaFrase.includes("verde")
const temLaranja = novaFrase.includes("laranja")

const extra = frase.replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR")

console.log(novaFrase)
console.log(`Tem larajanja na frase? ${temVerde}`)
console.log(`Tem larajanja na frase? ${temLaranja}`)
console.log(extra)

}

guardarFrase()