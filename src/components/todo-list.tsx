import { Alert } from "react-bootstrap";
import { TodoItems } from "./todo-form";

interface TodoListItem {
    id: number,
    name: string,
    description: string,
    items: TodoItems[],
    setItems: (value: TodoItems[]) => void
}

function TodoList({id, name, description, items, setItems}: TodoListItem) {
    const removeItem = (id: number) => {
        const filteredItems = items.filter(x => x.id !== id);
        setItems(filteredItems);
    }

    return (
        <Alert key={id} variant="success" dismissible onClick={() => removeItem(id)}>
            <Alert.Heading>{name}</Alert.Heading>
            <p>
                {description}
            </p>
        </Alert>
    )
}

export default TodoList;