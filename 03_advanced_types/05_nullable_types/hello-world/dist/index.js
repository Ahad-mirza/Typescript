"use strict";
function create(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Hola");
    }
}
create(undefined);
create("Ahad");
