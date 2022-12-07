import { cl, initCart, download } from "./helpers/helpers.js";

class Person {
    constructor(data) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        return this;
    }
}

cl("Hello, world!");
initCart();

let x = new Person({ firstName: "Salaheddin", lastName: "AbuEin" });
let y = new Person({ firstName: "AlmutasemBellah", lastName: "AbuEin" });
let z = JSON.stringify(x);
cl(z);
download(x, y);


let right = document.querySelectorAll("span.right.arrows"),
    left = document.querySelectorAll("span.left.arrows");

let xyo = document.querySelector("shelf-content");document.querySelector("body > main > section:nth-child(2) > article")