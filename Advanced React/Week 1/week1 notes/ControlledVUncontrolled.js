//Uncontrolled
//    const Form = () => { 
//     const inputRef = useRef(null); 
   
//     const handleSubmit = () => { 
//       const inputValue = inputRef.current.value; 
//       // Do something with the value 
//     } 
//     return ( 
//       <form onSubmit={handleSubmit}> 
//         <input ref={inputRef} type="text" /> 
//       </form> 
//     ); 
//    }; 

//Controlled
// const Form = () => { 
//     const [value, setValue] = useState(""); 
   
//     const handleChange = (e) => { 
//       setValue(e.target.value) 
//     } 
   
//     return ( 
//       <form> 
//         <input 
//           value={value} 
//           onChange={handleChange} 
//           type="text" 
//         /> 
//       </form> 
//     ); 
//    }; 

//File input type
// const Form = () => { 
//     const fileInput = useRef(null); 
   
//     const handleSubmit = (e) => { 
//       e.preventDefault(); 
//       const files = fileInput.current.files; 
//       // Do something with the files here 
//     } 
   
//     return ( 
//       <form onSubmit={handleSubmit}> 
//         <input 
//           ref={fileInput} 
//           type="file" 
//         /> 
//       </form> 
//     ); 
//    }; 