abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(color: string, public radius: number) {
    super(color);
  }

  override render(): void {
    console.log(`Drawing a circle of color ${this.color} with radius ${this.radius}`);
  }
}

let circle = new Circle('red', 5);
circle.render();
// Output:
// Drawing a circle of color red with radius 5

