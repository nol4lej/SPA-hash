export function cardProducts(imageUrl, name){
    return `
    <div class="product">
        <img src="${imageUrl}">
        <p>${name}</p>
    </div>    
    `
}