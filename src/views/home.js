async function fetchProducts(){
    const respuesta = await fetch("http://localhost:3000/productos")
    const productos = await respuesta.json()
    return productos
}

async function renderProducts(){
    const productos = await fetchProducts()
    
    const arrayProductos = productos.map(producto => {
        const { imageUrl, name } = producto
        const contenedor = `
            <div class="product">
                <img src="${imageUrl}">
                <p>${name}</p>
            </div>
        `
        return contenedor
    })
    const sinComasArray = arrayProductos.join("")
    return sinComasArray;
}


export async function Home(){
    const productos = await renderProducts()
    const contenedor = `
        <h2 id="titulo">Estoy en Home</h2>
        <div class="products__container">${productos}</div>
    `

    return contenedor
}

