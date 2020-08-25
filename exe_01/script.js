// 1 - Crie uma função typechecker que recebe dois valores e verifica se ambos são do mesmo tipo de dados;
let a = 10
let b = false


function comparar() {
    if (typeof a == typeof b) {
        console.log("Tipo de dados iguais")
    } else {
        console.log("Tipo de dados diferentes")
    }

}

comparar()