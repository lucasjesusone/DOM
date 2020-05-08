function showInfo() {
    let name = document.querySelector("input[name='name']").value
    let favoriteColor = document.querySelector("select[name='color'] option:checked").text
    let likeProgramming = document.querySelector("input[name='like-programming']:checked").value
    let developerOptions = document.querySelectorAll("input[name='developer-options']:checked")
    let optionsValue = []
    developerOptions.forEach(element => { optionsValue.push(element.value) }) //usa-se PUSH para saber o valor de cada checkbox checado.
    let optionsChecked = optionsValue.join(", ") //Usa-se JOIN para saber as opções que usei no checkbox 
    alert(`Nome: ${name}\nCor Primária: ${favoriteColor}\nGosta de Programar? ${likeProgramming}\nConhecimentos em Programação: ${optionsChecked}`)



    /**  Existe duas formas para concatenar
     * alert("Nome: " + name + "\nCor Primária: " + favoriteColor + "\nGosta de Programar? " + likeProgramming +
        "\nConhecimentos em Programação: " + optionsChecked)
      
      
        ----------------------------------------------------------------------------------------------------------------------
     
     
      * alert(`Nome: ${name}\nCor Primária: ${favoriteColor}\nGosta de Programar? ${likeProgramming}\nConhecimentos em Programação: ${optionsChecked}`)
    */

}