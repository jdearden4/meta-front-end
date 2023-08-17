//Week 3 exercise: capture data
const h1 = document.querySelector('h1');

const arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
]

function handleClicks () {
    switch(h1.innerText) {
        case arr[0]: 
            h1.innerText =  arr[1];
            break;
        case arr[1]:  
            h1.innerText =  arr[2];
            break;
        case arr[2]: 
            h1.innerText =  arr[3];
            break;
        default: 
            h1.innerText =  arr[0];
    }
}

h1.addEventListener('click', handleClicks);


////Function vs OOO programming
//Functional:
var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax) {
    return shoes * tax;
}

var toPay = totalPrice(shoes, stateTax);

console.log(toPay);

//OOP
var purchase1 = {
    shoes: 100,
    sstateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase1.shoes + purchase1.stateTax;
        console.log('total price: ', calculation);
    }
}
purchase1.totalPrice();

var purchase2 = {
    shoes: 100,
    sstateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes + this.stateTax;
        console.log('total price: ', calculation);
    }
}
purchase2.totalPrice();

//making a tempate via classes
class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }
    turboOn() {
        console.log("turbo is on!");
    }
}

const car1 = new Car("red", 120);

car1.turboOn();

//example
class Animal { /* ...class code here... */ }

var myDog = new Animal()

console.log (Animal)

//inheritance hierarchy
class Animal { /* ...class code here... */ }
class Bird extends Animal { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }
//polymorphism
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

function ringTheBell(thing) {
    console.log(thing.bell())
}

ringTheBell(bicycle); // Ring, ring! Watch out, please!
ringTheBell(door); // "Ring, ring! Come here, please!"

//polymorphism
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

//constructors
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}

//inheritance
var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var eagle1 = Object.create(bird); //instantiates
console.log("eagle1: ", eagle1); //bird object is prorotype
console.log("eagle1 has wings:". eagle1.hasWings);

var eagle2 = Object.create(bird); //instantiates
console.log("eagle2 has wings:". eagle2.hasWings);

var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log("pnguin1 can fly", penguin1.canFly);

//creating classes
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}

myFirstTrain.toggleLights(); // undefined
myFirstTrain.lightsStatus(); // Lights on? true
myFirstTrain.getSelf(); // Train {color: 'red', lightsOn: true} //all methods live on the prototype, which is why they aren't here
myFirstTrain.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn); //super is inherited from the super class (train)
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLigths(); //inherits the super class' method
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}

//Using class instance as another class' constructor's property
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //


//default paramsclass NoDefaultParams {
//     constructor(num1, num2, num3, string1, bool1) {
//         this.num1 = num1;
//         this.num2 = num2;
//         this.num3 = num3;
//         this.string1 = string1;
//         this.bool1 = bool1;
//     }
//     calculate() {
//         if(this.bool1) {
//             console.log(this.string1, this.num1 + this.num2 + this.num3);
//             return;
//         }
//         return "The value of bool1 is incorrect"
//     }
// }

//to...

class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6


//Designing an ooo programming
// class Animal {
//     // constructor: color, energy
//     // isActive()
//         // if energy > 0, energy -=20, console log energy
//         // else if energy <= 0, sleep()
//     // sleep()
//         // energy += 20
//         // console.log energy
// }
// class Cat extends Animal {
//     // constructor: sound, canJumpHigh, canClimbTrees, color, energy
//     // makeSound()
//         // console.log sound
// }
// class Bird extends Animal {
//     // constructor: sound, canFly, color, energy
//     // makeSound()
//         // console.log sound
// }
// class HouseCat extends Cat {
//     // constructor: houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy
//     // makeSound(option)
//         // if (option)
//             // super.makeSound()
//         // console.log(houseCatSound)
// }
// class Tiger extends Cat {
//     // constructor: tigerSound, sound, canJumpHigh, canClimbTrees, color, energy
//     // makeSound(option)
//         // if (option)
//             // super.makeSound()
//         // console.log(tigerSound)
// }
// class Parrot extends Bird {
//     // constructor: canTalk, sound, canJumpHigh, canClimbTrees, color, energy
//     // makeSound(option)
//         // if (option)
//             // super.makeSound()
//         // if (canTalk)
//             // console.log("talking!")
// }
class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk

polly.makeSound(); // 'chirp', 'I'm a talking parrot!'
fiji.makeSound(); // 'chirp'

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();
// leo, no purring please:
leo.makeSound(false); // meow

// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddels.makeSound(true); // purr, Roar!

//destructuring objects and arrays
let {PI} = Math;

PI === Math.Pi; //true, we destructured PI
PI = 1;
PI === Math.Pi; //false

//loops
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); //[ ['speed', 400], ['color', 'magenta'] ]

//example of looping:
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(keys, ":", clothingItem[key])
}

//template literals
let noMultiLine = "no multi-line strings in ES5";
let multiLines = `this
can be on multiple lines`;

console.log("did you know? " + noMultiLine);
console.log(`did you know? ${multiLines}`);

//data structures - arrays
//forEach
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

// 0. kiwi
// 1. mango
// 2. apple
// 3. pear

//filter
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})
//[30,40,50]

[0,10,20,30,40,50].map( function(num) {
    return num / 10
})
//[0,1,2,3,4,5]

//objects in JS
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result) //['speed',100,'color','yellow']

//data structures - maps
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers); //Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}
bestBoxers.get(1); // 'The Champion'

//data structures - sets
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits); //{'apple', 'pear', 'plum'}

//spread
let top3 = [
    "the colleseum",
    "trvi fountain",
    "vatican"
];

//using spread and rest
//spread - arrays
const fruitss = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruitss, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array
//['apple', 'pear', 'plum', 'blueberry', 'strawberry']

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies); //['onion', 'parsley', 'carrot', 'beetroot']

//string into an array
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

//array into a new array
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2)

//spread - objects
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

//JS IN THE BROWSER
//JS DOM Manipulation 
// var h1 = document.createElement('h1')
// h1.innerText = "Type into the input to make this text change"

// var input = document.createElement('input')
// input.setAttribute('type', 'text')

// document.body.innerText = '';
// document.body.appendChild(h1);
// document.body.appendChild(input);

// input.addEventListener('change', function() {
//     h1.innerText = input.value
// })

//exercise: capture data (done in browser)
// var h1 = document.querySelector('.h1');
// var arr= [
//         'Example Domain',
//         'First Click',
//         'Second Click',
//         'Third Click'
// ];
// function handleClicks() {
//     switch(h1.innerText) {
//         case arr[0]: 
//             h1.innerText = arr[1]
//             break
//         case arr[1]: 
//             h1.innerText = arr[2]
//             break
//         case arr[2]: 
//             h1.innerText = arr[3]
//             break
//         default:
//             h1.innerText = arr[0]
//     }
// }

// h1.addEventListener('click', handleClicks);