function imprimeNomeTresComida(nome, comida1, comida2, comida3){
    const frase = `Estas são as comidas favoritas de ${nome}:
    - ${comida1}
    - ${comida2}
    - ${comida3}`

    console.log(frase)
}
const name = prompt(`Qual o seu nome?`)
const food1 = prompt(`Qual sua 1º comida favorita?`)
const food2 = prompt(`Qual sua 2º comida favorita?`)
const food3 = prompt(`Qual sua 3º comida favorita?`)
imprimeNomeTresComida(name, food1, food2, food3)