var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy(dairy) {
    for(var item of dairy) {
        console.log(item);
    }
}

logDairy();

const animal = {
    canJump: true
};
    
const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

//loop over bird object
function birdCan(bird){
    for(key of Object.keys(bird)) {
        console.log(key + ": " + bird[key]);
    }
}

birdCan();

//loop over bird object AND prototype
function animalCan(){
    for(prop in bird) {
        console.log(prop + ": " + bird[prop]);
    }
}

animalCan();