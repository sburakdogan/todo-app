import { useState } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import { Alert, Button } from 'react-bootstrap';
import TodoForm from './components/todo-form';

// type TodoItems = {
//   id: number;
//   name: string;
//   description: string;
// };

function App() {
  // const [items, setItems] = useState<TodoItems[]>([]);
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');

  // const removeItem = (item: TodoItems) => {
  //   const filteredItems = items.filter(x => x.id !== item.id);
  //   setItems(filteredItems);
  // }

  // const handleSubmitForm = (event: any) => {
  //   event.preventDefault();

  //   const todoItem: TodoItems = {
  //     id: Math.random(),
  //     name: title,
  //     description: description
  //   }

  //   setItems(items => [...items, todoItem]);
  //   setTitle('');
  //   setDescription('');
  // }

  return (
    <div className="App">
      <TodoForm />
    </div>
  );
}

export default App;
