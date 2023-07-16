export class cardProduct extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        this.render()
    }

    render(){
        const title = this.getAttribute("title")
        const imageSrc = this.getAttribute("imageSrc")
        this.innerHTML = `
        <div class="product">
            <img src="${imageSrc}">
            <p>${title}</p>
        </div>  
        `
    }

    set title(value){
        this.setAttribute("title", value)
    }

    get title(){
        return this.getAttribute("title")
    }

    get imageSrc() {
        return this.getAttribute('imageSrc');
    }
    
    set imageSrc(value) {
        this.setAttribute('imageSrc', value);
    }

}

customElements.define("product-item", cardProduct)