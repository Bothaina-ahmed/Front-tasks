class Shape {
    protected color: string;
    protected filled: boolean;
    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }
    get Color() {
        return this.color;
    }
    set Color(color: string) {
        this.color = color;
    }
    isfilled() {
        return true;
    }
    set Filled(filled: boolean) {
        this.filled = filled;
    }
    displayAll(): string {
        return `this is color${this.color}\n this is filled ${this.filled}`;
    }
}
class Circle extends Shape {
    protected radius : number;
    constructor(color:string, filled:boolean, radius:number) {
        super(color, filled);
        this.radius = radius;
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
    getcircumference(){
        return Math.PI * this.radius * 2;
    }
    displayAll(){
        return`raduis is:${this.radius}\n color is: ${this.color}\n and area is: ${this.getArea()}`;
    }
}
class Regtangle extends Shape{
    protected width:number;
    protected length:number;
    constructor(color:string,filled:boolean, width:number, length:number){
        super(color,filled);
        this.width=width;
        this.length=length;
    }
    get Width(){
        return this.width;
    }
    set Width(width:number){
        this.width=width;
    }
    get Length(){
        return this.length;
    }
    set Length(length:number){
        this.length=length;
    }
    getArea(){
        return this.length * this.width;
    }
    getcircumference(){
        return (this.length + this.width) * 2;
    }
    displayAll(){
        return`length is:${this.length}\n width is: ${this.width}\n and area is: ${this.getArea()}`;
    }

}
 class Square extends Regtangle{
     constructor(color:string,filled:boolean, width:number, length:number){
         super(color,filled,width,length);
     }
     set side(width:number){
         this.width=width;
     }
     get side(){
         return this.width;
     }
     getArea(){
        return this.length * this.width;
    }
     displayAll(){
        return`length is:${this.length}\n width is: ${this.width}\n and area is: ${this.getArea()}`;
    }
 }
let sh = new Shape('red', true);
console.log(sh.displayAll);
let ci= new Circle('red',true,1);
console.log(ci.getArea);
console.log(ci.displayAll);
let re= new Regtangle('red',true,1,1);
console.log(re.displayAll);
let sq= new Square('red', true,5,5);
console.log(sq.displayAll);