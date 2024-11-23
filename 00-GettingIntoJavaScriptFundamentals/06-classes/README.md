# Introduction and Lesson Overview - Classes

Welcome to your next JavaScript session! We'll be discussing Classes, which are essential blueprints for creating objects. We'll cover class syntax, constructors, methods, and class inheritance. Are you ready to explore JavaScript Classes? Let's unravel the magic!

## Understanding the Concept of Classes

In JavaScript, Classes serve as blueprints for creating objects. Imagine building houses; each house shares a similar structure — doors, windows, a roof, rooms — but the details may vary, such as the number of rooms or doors. Similarly, each object of a class will have a consistent structure, but the details may differ.

JavaScript

```
class House {
    // Stay tuned for properties and methods.
}
```

Here, `House` is a Class. An object of this Class would be an individual house.

## Exploring the Class Constructor

When creating an object from a class, the new keyword calls the constructor inside that class, initiating a new object called an instance of the class.

```
class Car {
    constructor(brand) {
        console.log("The Car constructor has been called");
        this.carname = brand;
    }
}
let myCar = new Car("Toyota"); // prints "The Car constructor has been called"
```

We've created a `myCar` object of the `Car` Class with `carname` set as 'Toyota'. The myCar object is an instance of the Car Class.

In JavaScript classes, `this` refers to the instance of the class. In other words, when an object is created using a class, `this` stands for that particular object.

When `this` is used inside a class's constructor method, _it refers to the newly created instance of that class_. In our code, `this.carname = brand;` means the `carname` property of the newly created object is set to the value of brand passed to the constructor.

You can access the property `carname` of the instance `myCar` as follows:

```
console.log(myCar.carname);  // Outputs: 'Toyota'
```

## Introduction to Class Methods

Class Methods allow an object of the class to interact with its properties. Consider a simple `Player` class for a game, for example. A player has properties like `name` and `score` and methods like `increaseScore`.

```
class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    increaseScore() {
        this.score++; // Increase Player's score by 1, the same as this.score += 1;
    }
}

let player1 = new Player('John', 0);
player1.increaseScore();

console.log(player1.name); // Output: John
console.log(player1.score); // Output: 1
```

Note that when defining class methods, we omit the `function` keyword.

## Diving into Class Inheritance

Inheritance enables one Class to acquire properties and methods from another Class. In Javascript, you can create a new class that inherits from an existing class with the `extends` keyword.

A key part of using class inheritance is the `super` keyword. It's used to call the constructor of the parent class and to access the parent's methods.

Here's an example that demonstrates the order of operations when an instance of the subclass (Cat or Dog) is created:

```
class Animal {
    constructor(name) {
        console.log("An instance of Animal is being created");
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Cat extends Animal {
    // Cat does not have its own constructor or speak method
}

class Dog extends Animal {
    constructor(name, breed) {
        console.log("An instance of Dog is being created");
        super(name);  // calls the parent constructor
        this.breed = breed;
    }

    speak() {
        super.speak();  // calls the parent method
        console.log(`${this.name} barks.`);
    }
}

let whiskers = new Cat('Whiskers');
// Logs:
// An instance of Animal is being created

whiskers.speak(); // Logs: Whiskers makes a noise.

let spot = new Dog('Spot', 'Dalmatian');
// Logs:
// An instance of Dog is being created
// An instance of Animal is being created

spot.speak();
// Logs:
// Spot makes a noise.
// Spot barks.
```

In this example, when a new instance of Dog named Spot is created, it first logs "An instance of Dog is being created", then `super(name)` calls the Animal constructor, which logs "An instance of Animal is being created". When Spot speaks, it calls the parent's `speak` method, outputting "Spot makes a noise.", then it adds its own message, "Spot barks.". This demonstrates how Dog instances inherit properties and methods from both the Dog and the `Animal` class.

In contrast, `Cat` does not have its own constructor or `speak` method, so it fully relies on the inherited constructor and method from `Animal`. Thus, a new Cat instance like `whiskers` shows only "An instance of Animal is being created" and when we call `whiskers.speak()`, it only outputs "Whiskers makes a noise.". This highlights how a subclass can fully adopt a superclass's features when it does not define its own.

## Lesson Summary

The exploration has been exciting, hasn't it? We've delved into JavaScript Classes, learned about class syntax, constructors, methods, and class inheritance. Mastering these concepts represents an important stride in your JavaScript journey. Brace yourself for hands-on exercises that will help solidify your knowledge. See you on the other side!
