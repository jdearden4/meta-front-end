//To show conditional rendering:

// function CurrentMessage() {
//     const day = new Date().getDay();
//     return (
//         {day >= 1 && day <= 5}
//         ? <Workdays/>
//         : <Weekends />
//     );
// }

// export default CurrentMessage;


//With props:
// function CurrentMessage(props) {
//         if (props.day >= 1 && props.day <= 5) {
//             return <Workdays />
//         }
//         return <Weekends />
//     }

//With element variables:
// function CurrentMessage({day}) {
//         const weekday = (day >= 1 && day <= 5);
//         const weekend = (day >= 6 && day <= 7);
//         let message;
    
//         if (weekday) {
//             message = <Workdays />
//         } else if (weekend) {
//             message = <Weekends />
//         } else {
//             message = <ErrorComponent />
//         }
    
//         return (
//             <div>
//                 {message}
//             </div>
//         )
//     }

//using && 
// function LogicalAndExample() {
//     const val = prompt('Anything but a 0')

//     return (
//         <div>
//             <h1>Please don't type in a zero</h1>
//             {val &&
//                 <h2>Yay, no 0 was typed in!</h2>
//             }
//         </div>
//     )
// }