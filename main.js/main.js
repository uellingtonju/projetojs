
// Procurar o botao
document.querySelector("#add-time")
    //Quando clicar no botao
    .addEventListener('click', cloneField)

//executar uma acao

// Duplicar os campos
function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // limpar os campos. que campos?
    const fieds = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar 
    fieds.forEach(function (fild) {
        //pega o fild do momento e limpa ele
        fild.value = ""
    })

    //colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}