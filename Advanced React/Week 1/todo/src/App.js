import {useState} from "react";
import Input from './Input'
import './App.css';

const ToDo = props => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <Input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
);

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '18:00',
  }, {
    id: 'todo2',
    createdAt: '20:30',
  }]);

  const reverseOrder = () => {
    //reverse is a mutative operation, so we need to create a new array first
    setTodos([...todos].reverse());
  }

  return (
    <div>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
      <tbody>
        {todos.map((todo, index) => (
          //this key will not work since we switch the order
          // <ToDo key={index} id={todo.id} createdAt={todo.createdAt} />
          //so we change the key to this
         <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
    ))}
      </tbody>
      </table>
      </div>
  )
}

export default App;