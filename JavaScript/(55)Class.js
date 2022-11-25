// Without new keyword constructor doesn't invoke

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

const animal1 = new Animal("Jerry", 1);
console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isSuperCute());
