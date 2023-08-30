//default exports, only one export

export default function addTwo(a, b) {
    console.log(a + b);
}
//or

// function addTwo(a,b) {
//     console.log(a+b);
// }
// export default addTwo;

//to IMPORT the commented out above code into another JS file:
import addTwo from "./addTwo";

//named exports to export only certain parts of a given JS file
//as many named exports as you want

export function addTwo(a, b) {
    console.log(a + b);
}

export function addThree(a, b, c ) {
    console.log(a + b + c);
}

//or
function addTwo(a, b) {
    console.log(a + b);
}

function addThree(a, b, c ) {
    console.log(a + b + c);
}

export { addTwo, addThree};

//to IMPORT the above code into another JS file:
import { addTwo } from "./addTwo"; 