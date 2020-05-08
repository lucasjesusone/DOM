Código da Resolução do Exercício2


index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Exercício 19</title>
  <script src="js/property.js"></script>
  <script src="js/app.js"></script>
  <script src="js/main.js"></script>
</head>
<body>
  <h3>Cadastro de Imóveis</h3>

  <form onsubmit="app.addProperty()">
    <p>
      <label>Tipo: </label>
      <select name="kind">
        <option value="Apartamento">Apartamento</option>
        <option value="Casa">Casa</option>
      </select>
    </p>

    <p>
      <label>Área: </label>
      <input type="number" name="area" step="any" min="0" />
    </p>

    <p>
      <input type="checkbox" name="rented" /> Alugado
    </p>

    <button type="submit">Salvar</button>
    <button type="button" onclick="app.cleanForm()">Limpar</button>
  </form>

  <br />

  <h3>Imóveis cadastrados</h3>

  <ul id="properties"></ul>
</body>
</html>


property.js

class Property {
  constructor(kind, area, rented) {
    this.kind = kind
    this.area = area
    this.rented = rented
  }
}


app.js

class App {
  addProperty() {
    event.preventDefault()
    let kind = document.querySelector("select[name='kind']").value
    let area = document.querySelector("input[name='area']").value
    let rented = document.querySelector("input[name='rented']").checked
    let property = new Property(kind, area, rented)
    this.addOnPropertiesList(property)
    this.cleanForm()
  }

  addOnPropertiesList(property) {
    let listElement = document.createElement("li")
    let propertyInfo = " Tipo: " + property.kind + " (Área: " + property.area + "m²)"
    if(property.rented) {
      let rentedMark = this.createRentedMark()
      listElement.appendChild(rentedMark)
    }
    listElement.innerHTML += propertyInfo
    let buttonToRemove = this.createRemoveButton()
    listElement.appendChild(buttonToRemove)
    document.getElementById("properties").appendChild(listElement)
  }

  createRentedMark() {
    let rentedMark = document.createElement("span")
    rentedMark.style.color = "white"
    rentedMark.style.backgroundColor = "red"
    rentedMark.innerText = "ALUGADO"
    return rentedMark
  }

  createRemoveButton() {
    let buttonToRemove = document.createElement("button")
    buttonToRemove.setAttribute("onclick", "app.remove()")
    buttonToRemove.innerText = "Remover"
    return buttonToRemove
  }

  cleanForm() {
    document.querySelector("input[name='area']").value = ""
    document.querySelector("input[name='rented']").checked = false
  }

  remove() {
    let liToRemove = event.target.parentNode
    document.getElementById("properties").removeChild(liToRemove)
  }
}


main.js

const app = new App()