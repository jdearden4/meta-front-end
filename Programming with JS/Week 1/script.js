const petDog = "Rex";
const petCat = "Pepper";
console.log(petCat, petDog);
console.log(`my pet cat is ${petCat} and my pet dog is ${petDog}`);
let catSound = "purr";
const dogSound = "bark";
console.log(`${petDog} says ${dogSound}`);
console.log(`${petCat} says ${catSound}`);
catSound = "meow";
console.log(`${petCat} now says ${catSound}`);

const age = 10;
if (age >= 65) {
console.log("you get your income from  your pension");
} else if (age < 65 && age >= 18) {
    console.log("each month you get a salary");
} else if (age < 18) {
    console.log("you get an allowance");
} else {
    console.log("the value of the age variable is not numerical");
}

const day = 'sunday';
switch (day){
    case 'monday': 
        console.log('Do something');
        break;
    case 'tuesday': 
        console.log('Do something');
        break;
    case 'wednesday': 
        console.log('Do something');
        break;
    case 'thursday': 
        console.log('Do something');
        break;
    case 'friday': 
        console.log('Do something');
        break;
    case 'saturday': 
        console.log('Do something');
        break;
    case 'sunday': 
        console.log('Do something, it is sunday');
        break;
    default:
        console.log('There is no such day');
}

//Write a "for" loop that will perform exactly the same repetitive code as this:

for (let i=0; i<=10; i++) {
    console.log(i)
}
console.log('Counting completed!')

for (let i=10; i>0; i--) {
    console.log(i)
}
console.log('Counting finished!')

//Write a "while" loop that will perform exactly the same repetitive code as this:
let i = 1;
while (i < 10) {
    console.log(i);
    i++;
}    
console.log('Counting completed!')

let j = 10;
while (j > 10) {
    console.log(j);
    j--;
}    
console.log('Counting completed!')

let year = 2018;
while (year < 2023) {
    console.log(year);
    year ++;
}

//working with conditionals and loops
for (let i = 0; i <= 10; i++ ) {
    if(i==1) {
        console.log("gold medal");
    }
    else if(i==2) {
        console.log("silver medal")
    }
    else if(i==3) {
        console.log("bronze medal")
    }
    else {
        console.log(i);
    }
}

for (let i = 1; i <=10; i++) {
    switch(i) {
        case 1:
            console.log('gold');
            break;
        case 2:
            console.log('silver');
            break;
        case 3:
            console.log('bronze');
            break;
        default:
            console.log(i);    
    }
}