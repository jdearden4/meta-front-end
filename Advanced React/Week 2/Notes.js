// // import {useState} from "react";

// // export default function App() {
// //     const restaurantName = useState("Lemon");
// //     console.log(restaurantName);
// //     return null;
// // }

// // // the return value is an array
// // //['Lemon', f] wheref is the function to update the state

// // //SO, we need to do this instead:
// // export default function App() {
// //     //array destructuring
// //     const [restaurantName, setRestaurantName] = useState("Lemon");
// //     return <h1>{restaurantName}</h1>
// // }

// // //example: changing state on a user event
// // export default function App() {
// //     //array destructuring
// //     const [restaurantName, setRestaurantName] = useState("Lemon");
// //     function updateRestaurantName() {
// //         setRestaurantName("Little Lemon")
// //     };

// //     return (
// //         <div>
// //             <h1>{restaurantName}</h1>
// //             <button onClick={updateRestaurantName}>
// //                 Update restaurant name
// //             </button>
// //         </div>
// //     ); 
// // };

// // //ANTOHER EXAMPLE: WITH OBJECTS
// // //with useStatem copy the state object and then update the copy
// // //we do this because we cannot reassign a variable declared using const
// // import { useState } from "react"; 
 
// // export default function App() { 
// //   const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
// //   console.log(greeting, setGreeting); 
 
// //   function updateGreeting() { 
// //     const newGreeting = {...greeting}; 
// //     newGreeting.greet = "Hello, World-Wide Web"; 
// //     setGreeting(newGreeting); 
// //   } 
 
// //   return ( 
// //     <div> 
// //       <h1>{greeting.greet}</h1> 
// //       <button onClick={updateGreeting}>Update greeting</button> 
// //     </div> 
// //   ); 
// // } 

// // //ANOTHER EXAMPLE:
// // import { useState } from "react"; 
 
// // export default function App() { 
// //   const [greeting, setGreeting] = useState( 
// //     { 
// //         greet: "Hello", 
// //         place: "World" 
// //     } 
// //   ); 
// //   console.log(greeting, setGreeting); 
 
// //   function updateGreeting() { 
// //     setGreeting(prevState => { 
// //         return {...prevState, place: "World-Wide Web"} 
// //     }); 
// //   } 
 
// //   return ( 
// //     <div> 
// //       <h1>{greeting.greet}, {greeting.place}</h1> 
// //       <button onClick={updateGreeting}>Update greeting</button> 
// //     </div> 
// //   ); 
// // } 

// //GOALS APP USING USESTATE HOOK
// import {useState} from "react";

// function GoalForm(props) {
//     const [formData, setFormData]=React.useState({goal: "", by: ""});

// //event object,
//     function changeHandler(e) {
//         //keeping state immutable makes it easier to update old version to  new copy
//         setFormData({...formData, [e.target.name]: e.target.value});
//     }

//     function submitHandler(e) {
//             e.preventDefault();
//             props.onAdd(formData);
//             setFormData({goal: "", by: ""});
//     };

//     return (
//         <>
//         <h1>My little lemon goals</h1>
//         <form obSubmit={submitHandler}>
//         <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler} />
//         <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler} />
//         <button>Submit Goal</button>
//         </form>
//         </>
//     );
// }

// //map over all goals array of objects
// //we output an unordered list with each individual goal and by date
// function ListOfGoals(props){
//     return (
//         <ul>
//             {props.allGoals.map((g) => {
//                 <li ket={g.goal}>
//                     <span>My goal is to {g.goal}, by {g.by}</span>
//                 </li>
//             })}
//         </ul>
//     );
// }

// export default function App() {
//     const [allGoals, updateAllGoals] = React.useState([]);
//     function addGoal(goal) { updateAllGoals([...allGoals, goal]);}
//     return (
//         <div className="App">
//             <GoalForm onAdd={addGoal} />
//             <ListOfGoals allGoals={allGoals}/>
//         </div>
//     )
// }

// //USEEFFECT HOOK
// useEffect(() => { 
//     document.title = `Little Lemon, v${version}`;
//   }, [version]); // Only re-run the effect if version changes 

//   //USEEFFECT HOOK EXAMPLE
//   function MenuPage(props) { 
//     const [data, setData] = useState([]); 
  
//     useEffect(() => { 
//       document.title = 'Little Lemon'; 
//     }, []); 
  
//     useEffect(() => { 
//       fetch(`https://littlelemon/menu/${id}`) 
//         .then(response => response.json()) 
//         .then(json => setData(json)); 
//     }, [props.id]); 
  
//     // ... 
//   } 

//   //EXAMPLE: USING THE EFFECT HOOK
//   import {useState} from "react";
// function App() {
//     const [toggle, setToggle] = React.useState(false);

//     const clickHandler = () => {
//         setToggle(toggle);
//     }

//     React.useEffect(()=> {
//         toggle ? "Welcome to the Little Lemon" : "Using useEffect Hook" 
//         //this bracket means the useEffect only runs once
//     }, []);

//     return (
//         <div>
//             <h1>Using the useEffect hook</h1>
//             <button onClick={clickHandler}>
//                 Toggle message
//             </button>
//             {toggle && <h2>Welcome to the little lemon</h2>}
//         </div>
//     )
// }
// export default App;

// //USEEFFECT HOOK WITH FETCHING DATA
// import { useState, useEffect } from "react"; 
 
// export default function App() { 
//   const [btcData, setBtcData] = useState({}); 
//   useEffect(() => { 
//     fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
//       .then((response) => response.json()) 
//       .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
//       .catch((error) => console.log(error)); 
//   }, []); 
 
//   return ( 
//     <> 
//       <h1>Current BTC/USD data</h1> 
//       <p>Code: {btcData.code}</p> 
//       <p>Symbol: {btcData.symbol}</p> 
//       <p>Rate: {btcData.rate}</p> 
//       <p>Description: {btcData.description}</p> 
//       <p>Rate Float: {btcData.rate_float}</p> 
//     </> 
//   ); 
// } 

// //OR THIS (preferred)

// import { useState, useEffect } from "react"; 
 
// export default function App() { 
//   const [btcData, setBtcData] = useState({}); 
 
//   const fetchData = () => { 
//     fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
//       .then((response) => response.json()) 
//       .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
//       .catch((error) => console.log(error)); 
//   }; 
 
//   useEffect(() => { 
//     fetchData(); 
//   }, []); 
 
//   return ( 
//     <> 
//       <h1>Current BTC/USD data</h1> 
//       <p>Code: {btcData.code}</p> 
//       <p>Symbol: {btcData.symbol}</p> 
//       <p>Rate: {btcData.rate}</p> 
//       <p>Description: {btcData.description}</p> 
//       <p>Rate Float: {btcData.rate_float}</p> 
//     </> 
//   ); 
// } 

// //EXAMPLE: SETTING UP TWO RENDERS IF THE DATA FAILS
// return someStateVariable.length > 0 ? ( 
//     <div> 
//       <h1>Data returned:</h1> 
//       <h2>{someStateVariable.results[0].price}</h2> 
//     </div> 
//   ) : ( 
//     <h1>Data pending...</h1> 
//   ); 

//   //EXAMPLE:FETCHING DAATA
//   import React from 'react';
//   function App() {
//     //useState hook
//     const [user, setUser] = React.useState([]);

//     //fetches data from api, recieves response in json format
//     //updates state with this data
//     //n ohooks allowed in fetchdata function
//     const fetchData = () => {
//         fetch("https://randomuser.me/api/?results=1")
//         .then(response => response.json())
//         .then(data => setUser(data));
//     }

//     //call the fetch data function in the use effect hook
//     React.useEffect(() => {
//         fetchData(); 
//     },[]);

//     //put keys of user objects into an array
//     //can access the length of the array (if its >0, the state will have changed)
//     return Object.keys(user).length>0 ? (
//         <div>
//             <h1>Data returned:</h1>
//             <h2>First name: {user.results[0].name.first}</h2>
//             <h2>Last name: {user.results[0].name.last}</h2>
//         </div>
//     ) : (
//         <h1>Data pending...</h1>
//     );
//   }

//   //EXAMPLE USEREF TO ACCESS DOM

//   function App() {
//     const formInputRef = React.useRef(null);

//     //save ref object to variable named formInputRef
//     //set ito value of input element
//     //DOMnode is assigned as current property of ref object
//     const focusInput = () => {
//         formInputRef.current.focus();
//     }

//     return (
//         <>
//         <h1>Using useRef to access underlying DOM</h1>
//         <input type="text"/>
//         <button onClick={focusInput}>
//             Focus Input
//         </button>
//         </>
//     )
//   }

//   export default App;

//   //CUSTOM HOOKS
//   import { useState } from "react"; 
//   import useConsoleLog from "./useConsoleLog";
 
// function App() { 
//   const [count, setCount] = useState(0); 
//   useConsoleLog(count);

 
//   function increment() { 
//     setCount(prevCount => prevCount + 1) 
//   } 
 
//   return ( 
//     <div> 
//       <h1>Count: {count}</h1> 
//       <button onClick={increment}>Plus 1</button> 
//     </div> 
//   ); 
// } 
 
// export default App; 

// //WOULD BE IN A SEPARATE FILE
// import { useEffect } from "react";

// function useConsoleLog(varName) {
//   useEffect(() => {
//     console.log(varName);
//   }, [varName]);
// }

// export default useConsoleLog;