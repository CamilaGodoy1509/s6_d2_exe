var itens = JSON.parse(localStorage.getItem("itens"))
if (itens == null) {
    itens = []
}

    function adicionar() {
       
    itens.push ({
        name: document.getElementById('name').value,
        quantidade: document.getElementById('quantidade').value,
    });

    const json_itens = JSON.stringify(itens);
    localStorage.setItem ("itens", json_itens);
}
