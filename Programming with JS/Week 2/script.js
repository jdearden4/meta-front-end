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