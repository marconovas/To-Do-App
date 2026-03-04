import { Button, Card } from "react-bootstrap";


export default function TaskItem ({ task, onComplete, onDelete, onEdit}) {
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
                <div className="d-flex justify-content-evenly align-content-center">
                    <Button variant="danger" onClick={() => onDelete(task.id)}>Delete Task</Button>
                    <Button variant="warning" onClick={() => onEdit(task)}>Edit Task</Button>
                </div>
            </Card.Body>
        </Card>
    )
}