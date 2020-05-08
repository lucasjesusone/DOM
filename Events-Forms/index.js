function save() {
    event.preventDefault() // Essa função serve para não recarregar a página, como de padrão pelo onsubmit="save()"
    let name = document.querySelector("input[name='name']").value
    let programmingLang = document.querySelector("select[name='programming-lang']").value
    alert(`Nome: ${name}\nLinguagem de Programação: ${programmingLang}`)
}