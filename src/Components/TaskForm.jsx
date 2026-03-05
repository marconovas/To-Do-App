import { useState } from "react"
import { Button, Form } from "react-bootstrap";


export default function TaskForm ({ addTasks }) {
    
    const [text, setText] = useState("");
    const [priority, setPriority] = useState("");

    const HandleSubmit = (e) => {
        e.preventDefault();

        const  newTask = {
            id: crypto.randomUUID(),
            text: text,
            completed: false,
            priority: priority,
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
                <Form.Select className="mt-2 mb-2">
                    <option>Select priority</option>
                    <option value={1} onClick={() => setPriority("low")}>Low</option>
                    <option value={2} onClick={() => setPriority("medium")}>Medium</option>
                    <option value={3} onClick={() => setPriority("high")}>High</option>
                </Form.Select>
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