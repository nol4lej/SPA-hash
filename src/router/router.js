export function Router(hash){

    const root = document.getElementById("root")
    root.innerHTML = ""
    switch (hash) {
        case "#/":
            root.innerHTML = "<h2>Estoy en home</h2>"
            break;
        case "#/about":
            root.innerHTML = "<h2>Estoy en About</h2>"
        break;
        default:
            break;
    }

}