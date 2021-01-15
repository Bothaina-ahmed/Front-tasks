class Circle {
    // Data Members
    radius;
    color;
    // Actions => Methods
    constructor(radius,color) {
       this.radius=radius;
       this.color=color;
    }
    get Radius(){
        return this.radius;
    }
    set Radius(radius){
        this.radius=radius;
    }
    get Color(){
        return this.color;
    }
    set Color(color){
        this.color=color;
    }
    getArea(){
        return Math.pow(this.radius,2)*Math.PI;
    }
    displayAll(){
        return`raduis is:${this.radius}\n color is: ${this.color}\n and area is: ${this.getArea()}`;
    }
}

class Cylinder extends Circle {
    constructor(radius,color,height) {
        super(radius,color);
        this.height = height;
    }
    get Height(){
        return this.height;
    }
    set Height(height){
        this.height=height;
    }
    getVolume(){
        return Math.PI*Math.pow(this.radius,2)*this.height;
    }
    displayAll(){
        return`raduis is:${this.radius}\n color is: ${this.color}\n 
        and height is: ${this.height} \n volume is:${this.getVolume()}`;
    }
}
let cy= new Cylinder (5,'red',2);
cy.Radius=2;
cy.Height=5;
cy.Color='yellow';
console.log(cy.displayAll());
