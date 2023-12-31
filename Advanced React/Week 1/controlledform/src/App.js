// import './App.css';
// import {useState} from "react";

//EXAMPLE ONE
// function App() {
//   const [name, setName] = useState("");
  
//   const handleSubmit = (e) => {
//     e.preventDefault(); //this will cause the pageto not refresh and the server is ot hit with a request
//     setName("");
//     console.log('Form was successfuly submitted')
//   }
//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <div className="field">
//             {/* must use htmlFor, not just for */}
//             <label htmlFor="name">Name</label>
//             <input id="name" type="text" placeholder="Name" name="name" vale={name} onChange={e => setName(e.target.value)} />
//           </div>
//           <button disabled={!name} type="submit">Submit</button>
//         </fieldset>
//       </form>
//     </div>
//   );
// }

// export default App;

//EXAMPLE TWO
// function App() {
//   const [score, setScore] = useState("10");
//   const [comment, setComment] = useState("");
//   const handleSubmit = (e)=> {
//     e.preventDefault();
//     if(Number(score) <= 5 && comment.length <= 10) {
//       alert('Please provide a comment explaining why the experience was poor');
//       return;
//     }
//     console.log("Form submitted!");
//     //set state back to intiial values
//     setComment("");
//     setScore("10");
//   }
//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <h2>Feedback Form</h2>
//           <div className='field'>
//             <label>Score: {score}!</label>
//             <input 
//               type="range" 
//               min="0" 
//               max="10" 
//               value={score} 
//               onChange={e => setScore(e.target.value)} 
//             />
//           </div>
//           <div className="Field">
//             <label>Comment:</label>
//             <textarea value={comment} onChange={e => setComment(e.target.value)}/>
//           </div>
//           <button type="submit">Submit</button>
//         </fieldset>
//       </form>
//     </div>

//   )
// }

// export default App;

//LAB: EXAMPLE THREE, REGISTRATION FORM
import './App.css'; 
import {useState} from "react"; 
import {validateEmail} from "../src/utils"; 
 
const PasswordErrorMessage = () => { 
 return ( 
   <p className="FieldError">Password should have at least 8 characters</p> 
 ); 
}; 
 
function App() { 
 const [firstName, setFirstName] = useState(""); 
 const [lastName, setLastName] = useState(""); 
 const [email, setEmail] = useState(""); 
 const [password, setPassword] = useState({ 
   value: "", 
   isTouched: false, 
 }); 
 const [role, setRole] = useState("role"); 

 const getIsFormValid = () => { 
   return ( 
     firstName && 
     validateEmail(email) && 
     password.value.length >= 8 && 
     role !== "role" 
   ); 
 }; 
 
 const clearForm = () => { 
   setFirstName(""); 
   setLastName(""); 
   setEmail(""); 
   setPassword({ 
     value: "", 
     isTouched: false, 
   }); 
   setRole("role"); 
 }; 
 
 const handleSubmit = (e) => { 
   e.preventDefault(); 
   alert("Account created!"); 
   clearForm(); 
 }; 
 
 return ( 
   <div className="App"> 
     <form onSubmit={handleSubmit}> 
       <fieldset> 
         <h2>Sign Up</h2> 
         <div className="Field"> 
           <label> 
             First name <sup>*</sup> 
           </label> 
           <input 
             value={firstName} 
             onChange={(e) => { 
               setFirstName(e.target.value); 
             }} 
             placeholder="First name" 
           /> 
         </div> 
         <div className="Field"> 
           <label>Last name</label> 
           <input 
             value={lastName} 
             onChange={(e) => { 
               setLastName(e.target.value); 
             }} 
             placeholder="Last name" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Email address <sup>*</sup> 
           </label> 
           <input 
             value={email} 
             onChange={(e) => { 
               setEmail(e.target.value); 
             }} 
             placeholder="Email address" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Password <sup>*</sup> 
           </label> 
           <input 
             value={password.value} 
             type="password" 
             onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setPassword({ ...password, isTouched: true }); 
             }} 
             placeholder="Password" 
           /> 
           {password.isTouched && password.value.length < 8 ? ( 
             <PasswordErrorMessage /> 
           ) : null} 
         </div> 
         <div className="Field"> 
           <label> 
             Role <sup>*</sup> 
           </label> 
           <select value={role} onChange={(e) => setRole(e.target.value)}> 
             <option value="role">Role</option> 
             <option value="individual">Individual</option> 
             <option value="business">Business</option> 
           </select> 
         </div> 
         <button type="submit" disabled={!getIsFormValid()}> 
           Create account 
         </button> 
       </fieldset> 
     </form> 
   </div> 
 ); 
} 

export default App; 