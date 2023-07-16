import { cardProduct } from "../components/cardProcuts.js"
import {fetchProducts} from "./getProductos.js"

export async function renderProducts(){
    const productos = await fetchProducts()
    
    const arrayProductos = productos.map(producto => {
        const { imageUrl, name } = producto
        // const contenedor = cardProducts(imageUrl, name)
        const contenedor = `
            <product-item title="${name}" imageSrc="${imageUrl}"></product-item>
        `
        return contenedor
    })
    const prod = document.createElement("div")
    prod.innerHTML = arrayProductos

    return prod;
}