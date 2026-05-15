class Animal {

    constructor(name, age, species) {

        this.name = name;
        this.age = age;
        this.species = species;

        this.hunger = 50;
        this.energy = 50;
    }

    eat(food) {

        this.hunger -= 20;

        console.log(`${this.name} їсть ${food}`);
    }

    sleep(hours) {

        this.energy += hours * 10;

        console.log(`${this.name} спить ${hours} годин`);
    }

    move() {

        this.energy -= 10;

        console.log(`${this.name} рухається`);
    }

    makeSound() {

        console.log(`${this.name} видає звук`);
    }
}

class Mammal extends Animal {

    constructor(name, age, species, furColor) {

        super(name, age, species);

        this.furColor = furColor;
    }

    makeSound() {

        console.log(`${this.name} каже: Гррр`);
    }
}

class Bird extends Animal {

    constructor(name, age, species, canFly) {

        super(name, age, species);

        this.canFly = canFly;
    }

    makeSound() {

        console.log(`${this.name} каже: Чірік`);
    }
}

class Fish extends Animal {

    constructor(name, age, species, waterType) {

        super(name, age, species);

        this.waterType = waterType;
    }

    makeSound() {

        console.log(`${this.name} булькає`);
    }
}

class Zoo {

    constructor() {

        this.animals = [];
    }

    addAnimal(animal) {

        this.animals.push(animal);
    }

    showAnimals() {

        console.log("\n=== ТВАРИНИ ЗООПАРКУ ===");

        this.animals.forEach(animal => {

            console.log(
                `${animal.name} - ${animal.species}`
            );

        });
    }
}

const lion = new Mammal(
    "Лев",
    5,
    "Ссавець",
    "Золотий"
);

const parrot = new Bird(
    "Папуга",
    2,
    "Птах",
    true
);

const fish = new Fish(
    "Немо",
    1,
    "Риба",
    "Морська"
);

const zoo = new Zoo();

zoo.addAnimal(lion);
zoo.addAnimal(parrot);
zoo.addAnimal(fish);

zoo.showAnimals();

lion.makeSound();
parrot.makeSound();
fish.makeSound();

lion.eat("м'ясо");

parrot.sleep(3);

fish.move();