import { Conhecer } from "./controller.js";

let conhecer = new Conhecer(
    document.querySelector("#nome"),
    document.querySelector("#idade"),
    document.querySelector("#linguagem")
);
const form = document.querySelector(".form");
form.addEventListener("submit", event =>{
    event.preventDefault();
    conhecer.mostra();
})
