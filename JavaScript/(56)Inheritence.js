class Animal {
    constructor(aniName, age) {
        this.aniName = aniName;
        this.age = age
    }

    eat() {
        return `${this.aniName} is eating`;
    }

    isSuperCute() {
        return this.age <= 1;
    }
}


class Dog extends Animal {
    constructor(aniName, age, speed) {
        super(aniName, age); // super means inherited class only (Animal class) 
        this.speed = speed;
    }

    run() {
        return `${this.aniName} can run at speed ${this.speed}`
    }

}


const doggy = new Dog("Kutta", 5, 95); // Making object or instance
console.log(doggy);
console.log(doggy.eat());
console.log(doggy.run());
console.log(doggy.isSuperCute());