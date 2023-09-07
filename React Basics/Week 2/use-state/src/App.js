// import { useState } from 'react'; 
//STATE FORM EXAMPLE
// export default function RegisterForm() { 
//   const [form, setForm] = useState({ 
//     firstName: 'Luke', 
//     lastName: 'Jones', 
//     email: 'lukeJones@sculpture.com', 
//   }); 

//   return ( 
//     <> 
//       <label> 
//         First name: 
//         <input 
//           value={form.firstName} 
//           onChange={e => { 
//             setForm({ 
//               ...form, 
//               firstName: e.target.value 
//             }); 
//           }} 
//         /> 
//       </label> 
//       <label> 
//         Last name: 
//         <input 
//           value={form.lastName} 
//           onChange={e => { 
//             setForm({ 
//               ...form, 
//               lastName: e.target.value 
//             }); 
//           }} 
//         /> 
//       </label> 
//       <label> 
//         Email: 
//         <input 
//           value={form.email} 
//           onChange={e => { 
//             setForm({ 
//               ...form, 
//               email: e.target.value 
//             }); 
//           }} 
//         /> 
//       </label> 
//       <p> 
//         {form.firstName}{' '} 
//         {form.lastName}{' '} 
//         ({form.email})
//       </p> 
//     </> 
//   ); 
// } 

//OBSERVING STATE
import React, { useState } from 'react';
import Heading from './Heading';
import './App.css';

function App() {
  const [word, setWord] = React.useState('Eat');

  function handleClick() {
    setWord('Drink')
  }

  return (
    <div className="App">
      <Heading message={word + " at Little Lemon"}/>
      <button onBClick={handleClick}>Click here</button>
    </div>
  );
}

export default App;