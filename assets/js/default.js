import { cl, initCart, triggerMovement, download } from "./helpers/helpers.js";

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

let xyz = window.moveme,
    leftiez = document.querySelectorAll("span.left.arrows"),
    rightiez = document.querySelectorAll("span.right.arrows"),
    degree = 150;

triggerMovement(leftiez, rightiez, xyz, degree);

const myInterval = setInterval(letsPlay, 120);

function letsPlay() {
    for (let i = 0; i < xyz.length; i++) {
        if ((xyz[i].scrollWidth + xyz[i].scrollLeft + 1) > xyz[i].clientWidth) {
            xyz[i].scrollLeft -= degree;
        } else {
            clearInterval(myInterval);
        }
    }
}