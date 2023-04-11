import { Alert } from "react-bootstrap";
import { TodoItems } from "./todo-form";

interface TodoListItem {
    items: TodoItems[],
    setItems: (value: TodoItems[]) => void
}

function TodoList({ items, setItems }: TodoListItem) {
    const removeItem = (id: number) => {
        const filteredItems = items.filter(x => x.id !== id);
        setItems(filteredItems);
    }

    return (
        <>
            {items.map((item) => (
                <Alert key={item.id} variant="success" dismissible onClick={() => removeItem(item.id)}>
                    <Alert.Heading>{item.name}</Alert.Heading>
                    <p>
                        {item.description}
                    </p>
                </Alert>
            ))}
        </>
    )
}

export default TodoList;