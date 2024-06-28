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
btnFiltro.addEventListener('change', () =>{
    fetch(jsonFile).then((response)=>response.json())
    .then((datos)=>{
        if(btnFiltro.value === "menor"){
            datos.sort((a, b) => a.Precio - b.Precio);
            cardsPart.textContent='';
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
    }else if(btnFiltro.value === "mayor"){
        datos.sort((a, b) => b.Precio - a.Precio);
        cardsPart.textContent='';
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
    }
    })
})

let btnFiltroMenu = document.getElementById("select-menu");

btnFiltroMenu.addEventListener('click', () =>{
    fetch(jsonFile).then((response) => response.json())
    .then((datos) => {
        if(btnFiltroMenu.value === "fastFood"){
            cardsPart.textContent='';
            datos.forEach((elementos)=>{
                if(elementos.Menu === "FastFood"){
                    console.log(elementos);
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
                }
            });
        }
        if(btnFiltroMenu.value === "ejecutivo"){
            cardsPart.textContent='';
            datos.forEach((elementos)=>{
                if(elementos.Menu === "Ejecutivo"){
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
                }
            });
        }
    })
})

let btnReset = document.getElementById("resetFiltros");

btnReset.addEventListener('click', ()=>{
    fetch(jsonFile).then((response)=>response.json())
    .then((datos)=>{
        cardsPart.textContent = '';
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
})
