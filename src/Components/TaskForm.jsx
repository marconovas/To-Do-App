import { useState } from "react"
import { Button, Form } from "react-bootstrap";


export default function TaskForm ({ addTasks }) {
    
    const [text, setText] = useState("");

    const HandleSubmit = (e) => {
        e.preventDefault();

        const  newTask = {
            id: crypto.randomUUID(),
            text: text,
            completed: false,
            createdAt: Date.now()
        }

        addTasks(newTask);
        setText("");
    }

    return(
        <Form onSubmit={HandleSubmit} className="mb-4">
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="New Task..."
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </Form.Group>

            <Button 
                variant="outline-dark" 
                type="submit" 
                className="w-100"
            >
                Add Task
            </Button>
        </Form>
    )
}