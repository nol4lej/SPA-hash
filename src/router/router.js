import { Home } from "../views/home.js";

export function Router(hash){
    const root = document.getElementById("root")
    root.innerHTML = ""
    switch (hash) {
        case "":
        case "#/":
            root.innerHTML = Home()
            break;
        case "#/about":
            root.innerHTML = "<h2>Estoy en About</h2>"
        break;
        default:
            break;
    }
}