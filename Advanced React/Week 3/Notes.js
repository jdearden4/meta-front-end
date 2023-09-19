// //Component composition with children

// const Button = ({children, backgroundColor}) => {
//     return <button style={{backgroundColor}}>{children}</button>
// };


// const Alert = ({children}) => {
//     return (
//         <>
//         <div className="Overlay" />
//         <div className="Alert">{children}</div>
//         </>
//     );
// };

// const DeleteButton = () => {
//     return <Button backgroundColor="red">Delete</Button>;
// }

// function App() {
//     return (
//         <div className="App">
//             <header>Little Lemon Restaurant</header>
//             {/* when it's just a white box or container, it illustrates containment */}
//             {/* we can customize the content by prviding JSX as its children as seen below */}
//             <Alert>
//             <h4>Delete account</h4>
//             <p>
//                 Are you sure you want to proceed? You will miss all your delicious recipes!
//             </p>
//             <DeleteButton/>
//             </Alert>
//         </div>
//     )
// }

// export default App;

// //example to show specialization
// //components being special cases of other components
// //confirmation dialog is a special case of dialog
// function Dialog(props) {
//     return (
//         <div className="modal">
//             {props.children}
//         </div>
//     )
// }

// function ConfirmationDialog() {
//     return (
//         <Dialog color="blue">
//             <h1 className="Dialog-title">Thanks!</h1>
//             <p className="Dialog-message">We'll process your order in less than 24 hours.</p>
//         </Dialog>
//     );
// }

// //Manipulating children dynamically in JSX
// //example: display each customer order in separate row
// //use react APIs
// import * as React from "react";
// import "/.App.css"

// const Row = ({children, spacing}) => {

//     const childStyle = {
//         marginLeft: `${spacing}px`,
//     }
//     return (
//         <div className="Row">
//             {/* iterate through each child */}
//             {React.Children.map(children, (child, index) => {
//                 // return a new copy of the element where the second argument lets you add the new style props
//                //that will merge the previpis style
//                //if the element is not the first child, merge the child style object that contains margin left
//                 return React.cloneElement(child, {
//                     style: {
//                         ...child.props.style, 
//                         ...(index > 0 ? childStyle: {})
//                     },
//                 });
//             })}
//         </div>
//     );
// };

// function LiveOrders() {
//     return (
//         <div className="App">
//             <Row spacing={32}>
//                 <p>Pizza Margarita</p>
//                 <p>2</p>
//                 <p>$30</p>
//                 <p>18:30</p>
//                 <p>John</p>
//             </Row>
//         </div>
//     );
// }

// export default LiveOrders;


// //SPEAD OPERATOR EXAMPLE
// const Button = ({type, children, ...buttonprops}) => {
//     const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
//     return (
//         <button className={`Button ${className}`} {...buttonProps}>
//             {children}
//         </button>
//     )
// }
// const LoginButton = ({type, children, ...buttonProps}) => {
//     return (
//         <Button 
//         type="secondary"
//         {...buttonProps}
//         onClick={() => {
//             alert('Logging in')
//         }}
//         >
//             {children}
//         </Button>
//     );
// }

// function App () {
//     return (
//         <div className="App">
//             <header className="Header">Little Lemon Restaurant</header>
//             <Button type="primary" onClick={() => alert('Signing up!')}>
//             Sign up
//             </Button>
//             <LoginButton type="secondary" onClick={() => alert("signing up!")}>
//                 Login
//             </LoginButton>
//         </div>
//     )
// }

// export default App;

// //Cross-cutting concerns in react
// //HOC EXAMPLE

// const withSubscription = (WrappedComponent selectData) => {
//     return(props) => {
//         const [data, setData] = useState([]);

//         useEffect(() => {
//             const handleChange = () => {
//                 const newData = selectData(DataSource, props);
//                 setData(newData)
//             }
//             DataSource.addListener(handleChange)

//             return() => {
//                 DataSource.removeListener(handleChange)
//             };
//         }, []);
//         return <WrappedComponent data={data} {...props}/>
//     }
// }

// //usage
// const LiveOrdersListWithSubscription = withSubscription(
//     LiveOrders,
//     () => DataSource.getOrders()
// );

// //withSubscription is the wrapped component
// //returns a new component
// const UsersSubscribedWithSubscription = withSubscription(
//     UserList,
//     () => DataSource.getSubscribers()
// );

// //HOC's CONTINUED
// //do not mutate original component
// const HOC = (WrappedComponent) => {
//     // Don't do this and mutate the original component
//     WrappedComponent = () => {
      
//     }; 
//    …
//   }

//   //Pass unrelated props through to the Wrapped component
//   //do not have it drastically different than the original
//   const withMousePosition = (WrappedComponent) => {
//       const injectedProp = {mousePosition: {x: 10, y: 10}};
    
//       return (originalProps) => {
//         return <WrappedComponent injectedProp={injectedProp} {...originalProps} />;
//       };
//     };

//     //maximize composability
//     //sometimes HOC's can Sometimes, HOCs can accept additional arguments that act as 
//     //extra configuration determining the type of enhancement the component receives

//     //currying:
//     const EnhancedComponent = connect(selector, actions)(WrappedComponent);

//     //or

//     //connect returns a higher-order component
//     const HOC = connect(selector, actions);
//     const EnhancedComponent = HOC(WrappedComponent);

//     const enhance = compose(
//           // These are both single-argument HOCs
//           withMousePosition,
//           withURLLocation,
//           connect(selector)
//         );
        
//         // Enhance is a HOC
//         const EnhancedComponent = enhance(WrappedComponent);

    
// //CREATE AN HOC FOR CURSOR POSITIOM
// import "./App.css";
// import {useState, useEffect} from 'react';

// //HOC
// //returns a new component
// //with expresses the enhancing nature of the technique
// const withMousePosition = (WrappedComponent) => {
//     return (props) => {

//         const [mousePosition, setMousePosition] = useState({
//             x: 0,
//             y: 0,
//         })

//         useEffect(() => {
//             const handleMousePositionChange = (e) => {
//                 setMousePosition({
//                     x: e.clientX,
//                     y: e.clientY,
//                 });
//             };

//             window.addEventListener("mousemove", handleMousePositionChange);

//             //remove subscription when component unmounts, cleans up
//             return () => {
//                 window.removeEventListener("mousemove", handleMousePositionChange)
//             }
//         }, [])

//         return (
//             //pass data to all components interested in it
//             <WrappedComponent {...props}  mousePosition={mousePosition}/>
//         )
//     }
// }

// const PanelMouseLogger = ({mousePosition}) => {
//     if(!mousePosition) {
//         return null;
//     }
//     return (
//         <div className="BasicTracker">
//             <p>Mouse position:</p>
//             <div className="Row">
//                 <span>x: {mousePosition.x}</span>
//                 <span>y: {mousePosition.y}</span>
//             </div>
//         </div>
//     )
// };

// const PointMouseLogger = ({mousePosition}) => {
//     if(!mousePosition) {
//         return null;
//     }
//     return (
//         <p>
//             ({mousePosition.x}, {mousePosition.y})
//         </p>
//     );
// };

// const PanelMouseTracker = withMousePosition(PanelMouseLogger);
// const PointMouseTracker = withMousePosition(PointMouseLogger);

// function App() {
//     return (
//         <div className="App">
//             <header className="Header">Little Lemon Restaurant</header>
//             <PanelMouseTracker />
//             <PointMouseTracker />
//         </div>
//     )
// }

// export default App;

// //RENDER PROPS
// <MealProvider render={data => (
//     <p>Ingredients: {data.ingredients}</p>
// )}/>

// //RENDER PROPS
// import "./App.css";
// import { useEffect, useState} from 'react';

// //the component returns the result of calling the renfer function
// //only purpose of DataFetcher is to fetch data
// //recieve data via the argument in the render function which is the local state
// //used to store the list of desserts or drinks
// const DataFetcher = ({render, url}) => {
//     const [data, setData]=useState([]);

//     //fetching logic is a side effect so we use useEffect
//     useEffect(() => {
//         if(url.includes("desserts")) {
//             setData(["cake", "ice cream", "pie", "brownie"]);
//         } else {
//             setData(["water", "soda", "juice"])
//         }
//     }, []);

//     return render(data)
// };

// const DessertsCount = () => {
//     return (
//         <DataFetcher
//         url="https://littlelemon/deserts"
//         render={(data) => <p>{data.length} desserts</p>}
//         />
//     );
// }

// const DrinksCount = () => {
//     return (
//         <DataFetcher
//         url="https://littlelemon/drinks"
//         render={(data) => <p>{data.length} desserts</p>}
//         />
//     );
// }

// function App() {
//     return (
//         <div className="App">
//             <header className="Header">Little Lemon Restaurant</header>
//             <DessertsCount/>
//             <DrinksCount/>
//         </div>
//     )
// }

// export default App;

//TESTING 

//app.js file
import "./App.css"
import FeedbackForm from "/.FeedbackForm";

function App() {
    const handleSubmit = () => {
        console.log("form submitted!");
    };
    return(
        <div className="App">
            <FeedbackForm onSubmit={handleSubmit} />
        </div>
    )
}

export default App;

//FeedbackForm.js file
import "./App.css";
import {useState} from "react";

function FeedbackForm({onSubmit}) {
    const [score, setScore] = useState("10");
    const [comment, setComment] = useState("");

    const isDisabled = Number(score) < 5 && comment.length <= 10;

    const textAreaPlaceholder = isDisabled
    ? "please provde a comment saying why the experience was bad. min length is 10"
    : "optional feedback";

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({score, comment});
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback Form</h2>
                    <div className="Field">
                        <label>Score: {score}</label>
                        <input
                        value={score}
                        onChange={(e) => {
                            setScore(e.target.value)
                        }}
                        type="range"
                        min="0"
                        max="10"
                    />
                    </div>
                    <h2>Feedback Form</h2>
                    <div className="Field">
                        <label>Comments: {score}</label>
                        <input
                        placeholder={textAreaPlaceholder}
                        name="comment"
                        value="comment"
                        onChange={(e) => {
                            setComment(e.target.value)
                        }}
                    />
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

//App.text.js file

import { fireEvent, render, screen} from "@testing-library/react";
import FeedbackForm from "./FeedbackForm";

describe("Feedback Form", () => {
    test("Submission is disabled if score is lower than 5 and there is no feedback", () => {
        //mock function
        const handleSubmit = jest.fn();
        render(<FeedbackForm onSubmit={handleSubmit} />);

        //find and fill range input with a value
        const rangeInput = screen.getByLabelText(/Score:/);
        fireEvent.change(rangeInput, { target: { value: "4" } });

        const submitButton = screen.getByRole("button");
        fireEvent.click(submitButton);
        
        expect(handleSubmit).not.toHaveBeenCalled();
        expect(submitButton).toHaveAttribute("disabled");
    });
});