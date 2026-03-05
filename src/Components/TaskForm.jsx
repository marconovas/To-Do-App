import { useState } from "react"
import { Button, Form } from "react-bootstrap";


export default function TaskForm ({ addTasks }) {
    
    const [text, setText] = useState("");
    const [priority, setPriority] = useState("none");

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
                <Form.Select 
                    className="mt-2 mb-2"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="none">Select priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
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