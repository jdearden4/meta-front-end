import * as React from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  //passes the children prop and the function that gets invoked in every child contained within the children property
  const RadioOptions = React.Children.map(children, (child) => {
    //clone the element passing the target child element and a configuration with all new props
    //resulting element will have the original element's props with the new props merged in
    return React.cloneElement(child, {
      //onChange is checked to determine if the underlying radio input is selected
      //checked is only trye for one option at any point in time
      onChange,
      checked: child.props.value === selected,
    });
  });
  //returns the radio options element
  return <div className="RadioGroup">{RadioOptions}</div>;
};

//recieves onChange and checked that RadioGroup is injecting via child manipulation
export const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked prop to the input element
return ( 
   <div className="RadioOption"> 
     <input 
       id={value} 
       type="radio" 
      name={value}
      // value and checked passed into the radio input
       value={value} 
      checked={checked}
      //retrive the valye property from the event target object and pass it to the onChange prop as the argument
       onChange={(e) => { 
         onChange(e.target.value); 
       }} 
     /> 
     <label htmlFor={value}>{children}</label> 
   </div> 
 ); 
};
