import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import TodoList from "./todo-list";

export type TodoItems = {
    id: number;
    name: string;
    description: string;
};

function TodoForm() {
    const [items, setItems] = useState<TodoItems[]>([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmitForm = (event: any) => {
        event.preventDefault();

        const todoItem: TodoItems = {
            id: Math.random(),
            name: title,
            description: description
        }

        setItems(items => [...items, todoItem]);
        setTitle('');
        setDescription('');
    }
    return (
        <>
            <h1>Todo App</h1>
            <Form className='todo-form' onSubmit={handleSubmitForm}>
                <Form.Group className="mb-3" controlId="todoForm.controlText">
                    <Form.Label>Please give your task a title:</Form.Label>
                    <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="todoForm.controlTextArea">
                    <Form.Label>Please give your task a description:</Form.Label>
                    <Form.Control as="textarea" onChange={(e) => setDescription(e.target.value)} value={description} required rows={5} />
                </Form.Group>
                <Button type='submit'>
                    Add
                </Button>
            </Form>

            {items.map((item) => (
                <TodoList
                    name={item.name}
                    id={item.id}
                    description={item.description}
                    items={items} 
                    setItems={setItems}/>
            ))}
        </>
    );
}

export default TodoForm;