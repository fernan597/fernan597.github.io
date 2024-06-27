const cardsPart = document.querySelector(".partCard");
const jsonFile = "comidas.json";

fetch(jsonFile).then((response)=>response.json())
.then((datos)=>{
    console.log(datos)
    datos.forEach((elementos) => {
        cardsPart.innerHTML += `
        <div class="card cardelementos" style="width: 18rem;">
        <img src="${elementos.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text">Menu: ${elementos.Menu}</p>
        <p class="card-text">Plato: ${elementos.Plato}</p>
        <p class="card-text">Precio: $${elementos.Precio}</p>
        </div>
    </div>
        `
    });
})

let btnFiltro = document.getElementById("select-filtro");

const pintarDatos = (data) => {
    
}