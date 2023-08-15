//Exercise: Practicing with functions
function letterFinder(word, match) {
    for (let i=0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i);
        }
    }
}

letterFinder("test", "t")

// var car = {};
// car.color = "red";
// car["color"] = "green";
// car["speed"] = 200;
// car.speed = 100;
// console.log(car); // {color: "green", speed: 100}


const clothes = [];
clothes.push("top");
clothes.push("bottoms");
clothes.push("skirt");
clothes.push("shoes");
clothes.push("bag");
clothes.pop();
clothes.push("jacket");


console.log(clothes[2]);

const favCar = {};
favCar.color = "purple";
favCar.convertible = true;
console.log(favCar);

//Exercise: Error prevention
function addTwoNums(a,b) {
    try {
        if(a != number) {
            throw new ReferenceError("The first argument is not a number");
        } else if (b != number) {
            throw new ReferenceError("The second argument is not a number");
        } else {
            console.log(a+b);
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5");
console.log("it still works");

//Exercise: Defensive Programming
function letterFinder(word, match) {
    const condition1 = (typeof(word) == 'string') && (word.length >= 2);
    const condition2 = (typeof(match) == 'string') && (match.length == 1);
    if (condition1 && condition2) {
        for(let i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }
    else {
        console.log("Please pass correct arguments to the function.")
    }
}

letterFinder('a', 'b');
letterFinder("cat", "c");

//Function vs OOO programming
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