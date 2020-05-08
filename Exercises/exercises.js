function saveHouse() {
    let area = document.querySelector("input[name='area']").value
    let number = document.querySelector("input[name='number']").value
    let neighborhood = document.querySelector("input[name='neighborhood']").value
    let city = document.querySelector("input[name='city']").value
    let state = document.querySelector("input[name='state']").value

    let newListValue = document.createElement("li")
    newListValue.innerText = area + "m2, Número " + number + "(" + neighborhood + " - " + city + ", " + state + ")"

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")
        /** Isso é o mesmo que
            <button onclick="saveHouse()" type="button" onclick="removeHouse(this)">Salvar</button>
            porem foi feito diretamente pelo JS   */

    newListValue.appendChild(removeButton) //appendChild = Herdar tudo da váriavel removeButton

    document.getElementById("house-list").appendChild(newListValue)
}


function removeHouse(button) {
    let liToRemove = button.parentNode
    document.getElementById("house-list").removeChild(liToRemove)
}