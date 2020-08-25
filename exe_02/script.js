//2 - Crie uma função que recebe dois objetos quaisquer e verifica se ambos contem as mesmas propriedades com os mesmos tipos de dados, retorne um valor booleano para essa comparação;

let obj1 = {
    nome: "Carla",
    idade: "21"
}
let obj2 = {
    nome:"Camila",
    idade: 29
}

function compara() {
    for (let prop in obj1) {
            if (prop == prop && typeof obj1[prop] == typeof obj2[prop]) {
                console.log(true)
            }
            else {
                console.log(false)
            }
        

    }
}

compara()