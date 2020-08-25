//4 - Crie uma função que recebe um objeto e o nome de uma propriedade, verifica se esta propriedade existe no objeto, e retorna o inverso dessa comparação;

const obj = {
    nome:"Camila"
}

function verifica() {
    if(obj?.nome) {
        console.log(!obj)
    }

    else {
        console.log(!obj.nome)
    }
}

verifica()
