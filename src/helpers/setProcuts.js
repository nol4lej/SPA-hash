import { cardProducts } from "../components/cardProcuts.js"
import {fetchProducts} from "./getProductos.js"

export async function renderProducts(){
    const productos = await fetchProducts()
    
    const arrayProductos = productos.map(producto => {
        const { imageUrl, name } = producto
        const contenedor = cardProducts(imageUrl, name)
        return contenedor
    })
    const sinComasArray = arrayProductos.join("")
    return sinComasArray;
}