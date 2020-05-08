Código da Resolução do Exercício


index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Exercício 18</title>
  <script src="js/home-registration.js"></script>
</head>
<body>
  <h3>Home Registration</h3>

  <form>
    <p>
      <label>Area: </label>
      <input type="text" name="area" />
    </p>

    <p>
      <label>Número: </label>
      <input type="text" name="number" />
    </p>

    <p>
      <label>Bairro: </label>
      <input type="text" name="neighborhood" />
    </p>

    <p>
      <label>Cidade: </label>
      <input type="text" name="city" />
    </p>

    <button onclick="saveHouse()" type="button">Salvar</button>
  </form>

  <ul id="house-list"></ul>
</body>
</html>


home-registration.js

function saveHouse() {
    let area = document.querySelector("input[name='area']").value
    let number = document.querySelector("input[name='number']").value
    let neighborhood = document.querySelector("input[name='neighborhood']").value
    let city = document.querySelector("input[name='city']").value
    
    let newListValue = document.createElement("li")
    newListValue.innerText = area + "m², número " + number + " (" + neighborhood + " - " + city + ")"

    let	 removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")

    newListValue.appendChild(removeButton)

    document.getElementById("house-list").appendChild(newListValue)
}

function removeHouse(button) {
    let liToRemove = button.parentNode
    document.getElementById("house-list").removeChild(liToRemove)
}

Avalie esta aula:
