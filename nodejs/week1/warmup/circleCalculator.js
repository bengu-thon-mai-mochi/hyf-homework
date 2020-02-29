class Circle{
    constructor(radius){
        this.radius = radius;
    }

    getDiameter(){
        const diameter = 2 * this.radius;
        console.log(diameter);
    }

    getCircumference(){
        const circumference = (2 * this.radius) * Math.PI;
        console.log(circumference);
    }

    getArea(){
        const area = Math.PI * Math.pow(this.radius, 2);
        console.log(area);
    }
}

const circle1 = new Circle(1);
    circle1.getDiameter();
    circle1.getCircumference();
    circle1.getArea();

const circle2 = new Circle(2);
    circle2.getDiameter();
    circle2.getCircumference();
    circle2.getArea();