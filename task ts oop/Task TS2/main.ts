class Circle {
    protected color: string;
    protected radius:number;
    constructor(color: string, radius:number) {
        this.color = color;
        this.radius = radius;
    }
    get Color() {
        return this.color;
    }
    set Color(color: string) {
        this.color = color;
    }
    get Radius(){
        return this.radius;
    }
    set Radius(radius:number){
        this.radius=radius;
    }
    getArea(){
        return Math.pow(this.radius,2)*Math.PI;
    }
    displayAll(): string {
        return `this is color${this.color}\n this is radius ${this.radius} \n ${this.getArea()}`;
    }
}
class Cylinder extends Circle {
    protected height : number;
    constructor(color:string, radius:number, height:number) {
        super(color, radius);
        this.height = height;
    }
    get Height(){
        return this.height;
    }
    set Height(height:number){
        this.height=height;
    }
    getVolume(){
        return Math.PI*(this.radius,2)*this.height;
    }
    displayAll(){
        return`height is:${this.height}\n color is: ${this.color}\n and area is: ${this.getVolume()}`;
    }
}

let ci= new Circle('red',1);
console.log(ci.getArea);
console.log(ci.displayAll);
let cy= new Cylinder('red',1,1);
console.log(cy.getVolume);
console.log(cy.displayAll);
