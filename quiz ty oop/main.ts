interface Animal{
    Sound() : string;
    Speed() : number;
    IsPet() : string;
}
class Dog implements Animal{ 
    protected sound : string;
    protected speed : number;
    constructor(sound: string, speed:number)
    {
      this.sound= sound;
      this.speed=speed;
    }
    public Sound():string{
           return this.sound;
    }
    public Speed():number{
        return this.speed;
 }
 public IsPet():string{
     return this.sound ;
 }
}

class Cat implements Animal{ 
    protected sound : string;
    protected speed : number;
    constructor(sound: string, speed:number)
    {
      this.sound= sound;
      this.speed=speed;
    }
    public Sound():string{
           return this.sound;
    }
    public Speed():number{
        return this.speed;
    }
    public IsPet():string{
    return this.sound ;
   }
}
class Lion implements Animal{ 
    protected sound : string;
    protected speed : number;
    constructor(sound: string, speed:number)
    {
      this.sound= sound;
      this.speed=speed;
    }
    public Sound():string{
           return this.sound;
    }
    public Speed():number{
        return this.speed;
    }
    public IsPet():string{
    return this.sound ;
   }
}
let dog = new Dog ("dog" , 3);
console.log(dog.Sound);
console.log(dog.Speed);
console.log(dog.IsPet);
let cat = new Cat ("dog" , 3);
console.log(cat.Sound);
console.log(cat.Speed);
console.log(cat.IsPet);
let lion = new Lion ("dog" , 3);
console.log(lion.Sound);
console.log(lion.Speed);
console.log(lion.IsPet);
