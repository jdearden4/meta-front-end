//person class
class Person {
    constructor(name = 'Tom', age = '20', energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}

//worker class
class Worker extends Person {
    constructor(xp = 10, hourlyWage = 10, name, age, energy) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
    }
}

//intern object, run methods
var intern = new Worker('Bob', 21, 110, 0, 10);
var manager = new Worker('Alice', 30, 120, 100, 30);

intern.goToWork();
manager.doSomethingFun();

return intern, manager;
