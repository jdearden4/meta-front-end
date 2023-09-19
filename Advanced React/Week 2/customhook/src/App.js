import { useState, useEffect, useRef } from "react";
export default function App() {
  const ref = React.useRef(null);
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  return (
    <div style={{padding: "40px"}}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}
function usePrevious(val) {
  //invoke useRef hook
  const ref = useRef();
  //useEffect call
  //first parameter is an array function where we assign val to the current peoperty on the ref object
  //second parameter is the dependencies array with the val variable
  useEffect(() => {
    ref.current = val;
  }, [val]);
  //return the value
  return ref.current;
}
