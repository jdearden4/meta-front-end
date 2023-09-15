// import {useState} from "react";

// export default function App() {
//     const restaurantName = useState("Lemon");
//     console.log(restaurantName);
//     return null;
// }

// // the return value is an array
// //['Lemon', f] wheref is the function to update the state

// //SO, we need to do this instead:
// export default function App() {
//     //array destructuring
//     const [restaurantName, setRestaurantName] = useState("Lemon");
//     return <h1>{restaurantName}</h1>
// }

// //example: changing state on a user event
// export default function App() {
//     //array destructuring
//     const [restaurantName, setRestaurantName] = useState("Lemon");
//     function updateRestaurantName() {
//         setRestaurantName("Little Lemon")
//     };

//     return (
//         <div>
//             <h1>{restaurantName}</h1>
//             <button onClick={updateRestaurantName}>
//                 Update restaurant name
//             </button>
//         </div>
//     ); 
// };

// //ANTOHER EXAMPLE: WITH OBJECTS
// //with useStatem copy the state object and then update the copy
// //we do this because we cannot reassign a variable declared using const
// import { useState } from "react"; 
 
// export default function App() { 
//   const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
//   console.log(greeting, setGreeting); 
 
//   function updateGreeting() { 
//     const newGreeting = {...greeting}; 
//     newGreeting.greet = "Hello, World-Wide Web"; 
//     setGreeting(newGreeting); 
//   } 
 
//   return ( 
//     <div> 
//       <h1>{greeting.greet}</h1> 
//       <button onClick={updateGreeting}>Update greeting</button> 
//     </div> 
//   ); 
// } 

// //ANOTHER EXAMPLE:
// import { useState } from "react"; 
 
// export default function App() { 
//   const [greeting, setGreeting] = useState( 
//     { 
//         greet: "Hello", 
//         place: "World" 
//     } 
//   ); 
//   console.log(greeting, setGreeting); 
 
//   function updateGreeting() { 
//     setGreeting(prevState => { 
//         return {...prevState, place: "World-Wide Web"} 
//     }); 
//   } 
 
//   return ( 
//     <div> 
//       <h1>{greeting.greet}, {greeting.place}</h1> 
//       <button onClick={updateGreeting}>Update greeting</button> 
//     </div> 
//   ); 
// } 

//GOALS APP USING USESTATE HOOK
import {useState} from "react";

function GoalForm(props) {
    const [formData, setFormData]=React.useState({goal: "", by: ""});

//event object,
    function changeHandler(e) {
        //keeping state immutable makes it easier to update old version to  new copy
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function submitHandler(e) {
            e.preventDefault();
            props.onAdd(formData);
            setFormData({goal: "", by: ""});
    };

    return (
        <>
        <h1>My little lemon goals</h1>
        <form obSubmit={submitHandler}>
        <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler} />
        <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler} />
        <button>Submit Goal</button>
        </form>
        </>
    );
}

function ListOfGoals(props){
    return (
        <ul>
            {props.allGoals.map((g) => {
                <li ket={g.goal}>
                    <span>My goal is to {g.goal}, by {g.by}</span>
                </li>
            })}
        </ul>
    );
}

export default function App() {
    const [allGoals, updateAllGoals] = React.useState([]);
    function addGoal(goal) { updateAllGoals([...allGoals, goal]);}
    return (
        <div className="App">
            <GoalForm onAdd={addGoal} />
            <ListOfGoals allGoals={allGoals}/>
        </div>
    )
}