var itens = JSON.parse(localStorage.getItem("itens"))
if (itens == null) {
    itens = []
}

var tabela = document.getElementById('tabela')

for (i = 0; i < itens.length; i++) {
    var item = itens[i]
    var nome = item['name']
    var quantidade = item['quantidade']


    var linha = tabela.insertRow(1)
    var coluna = [linha.insertCell(0), linha.insertCell(1), linha.insertCell(2),  linha.insertCell(3)]
    coluna[0].innerHTML += "<td>" + nome + "</td>"
    coluna[1].innerHTML += "<td>" + quantidade + "</td>"
   
}



function zerar() {
    delete localStorage.itens
}