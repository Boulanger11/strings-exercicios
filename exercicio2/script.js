// A)
function removeEspaco(){
    const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
    const stringReduzida = minhaString.trim()
    const substituta = minhaString.replace(`________`,"sticioso")

    console.log(minhaString.length)
    console.log(stringReduzida.length)
    console.log(substituta)

    return(removeEspaco)
}
removeEspaco()

/*EXERCICIO DO HENRIQUE - 
const manipulaString = () => {
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
const stringReduzida = minhaString.trim()
const substituta = minhaString.replace('________', "sticioso")

console.log(minhaString.length)
console.log(stringReduzida.length)
console.log(substituta)

}

manipulaString()*/