import { cl, initCart, triggerMovement, myInterval, updateProgress, download } from "./resources/extensions.js";

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

let xyz = document.getElementsByClassName("shelf-content"),
    leftiez = document.querySelectorAll("span.left.arrows"),
    rightiez = document.querySelectorAll("span.right.arrows"),
    degree = 150;

triggerMovement(leftiez, rightiez, xyz, degree);
// myInterval(xyz, degree);