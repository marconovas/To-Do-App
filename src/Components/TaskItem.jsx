import { Button, Card } from "react-bootstrap";


export default function TaskItem ({ task, onComplete, onDelete }) {
    return(
        <Card>
            <Card.Body>
                <Card.Title>{task.text}</Card.Title>
                <Card.Text>
                    Date: {new Date(task.createdAt).toLocaleDateString()}<br/>
                    Completed: 
                    <input 
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onComplete(task.id)}/>
                </Card.Text>
                <Button onClick={() => onDelete(task.id)}>Delete Task</Button>
            </Card.Body>
        </Card>
    )
}