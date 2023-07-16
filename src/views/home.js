import { renderProducts } from "../helpers/setProcuts.js"

export async function Home(){
    const productos = await renderProducts()
    const contenedor = `
        <h2 id="titulo">Estoy en Home</h2>
        <div class="products__container">${productos}</div>
    `
    return contenedor
}