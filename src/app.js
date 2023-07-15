import { Router } from "./router/router.js"

export function App(){
    Router(window.location.hash)
    
    window.addEventListener("hashchange", () => {
        Router(window.location.hash)
    })
}