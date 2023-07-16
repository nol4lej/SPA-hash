export async function fetchProducts(){
    const respuesta = await fetch("http://localhost:3000/productos")
    const productos = await respuesta.json()
    return productos
}