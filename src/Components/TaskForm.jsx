import { useState } from "react"
import { Button, Form, Row, Col } from "react-bootstrap";
import "../Css/TaskForm.css"

export default function TaskForm ({ addTasks }) {

    const [text, setText] = useState("");
    const [priority, setPriority] = useState("none");

    const HandleSubmit = (e) => {
        e.preventDefault();

        if(!text.trim()) return;

        const newTask = {
            id: crypto.randomUUID(),
            text: text,
            completed: false,
            priority: priority,
            createdAt: Date.now()
        }

        addTasks(newTask);
        setText("");
        setPriority("none");
    }

    return(
        <Form onSubmit={HandleSubmit} className="task-form mb-4">

            <h6 className="form-title">Create Task</h6>

            <Row className="g-2">

                <Col xs={12}>
                    <Form.Control
                        type="text"
                        placeholder="Write a new task..."
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </Col>

                <Col xs={8}>
                    <Form.Select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="none">Priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </Form.Select>
                </Col>

                <Col xs={4}>
                    <Button
                        variant="primary"
                        type="submit"
                        className="w-100"
                    >
                        Add
                    </Button>
                </Col>

            </Row>

        </Form>
    )
}