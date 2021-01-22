"use strict";
class Dog {
    constructor(sound, speed) {
        this.sound = sound;
        this.speed = speed;
    }
    Sound() {
        return this.sound;
    }
    Speed() {
        return this.speed;
    }
    IsPet() {
        return this.sound;
    }
}
class Cat {
    constructor(sound, speed) {
        this.sound = sound;
        this.speed = speed;
    }
    Sound() {
        return this.sound;
    }
    Speed() {
        return this.speed;
    }
    IsPet() {
        return this.sound;
    }
}
class Lion {
    constructor(sound, speed) {
        this.sound = sound;
        this.speed = speed;
    }
    Sound() {
        return this.sound;
    }
    Speed() {
        return this.speed;
    }
    IsPet() {
        return this.sound;
    }
}
let dog = new Dog("dog", 3);
console.log(dog.Sound);
console.log(dog.Speed);
console.log(dog.IsPet);
let cat = new Cat("dog", 3);
console.log(cat.Sound);
console.log(cat.Speed);
console.log(cat.IsPet);
let lion = new Lion("dog", 3);
console.log(lion.Sound);
console.log(lion.Speed);
console.log(lion.IsPet);
