"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log(`Drawing a circle of color ${this.color} with radius ${this.radius}`);
    }
}
let circle = new Circle('red', 5);
circle.render();
