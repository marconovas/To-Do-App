import { Badge, Button, Card } from "react-bootstrap";


export default function TaskItem ({ task, onComplete, onDelete, onEdit }) {
    const priorityColor = () => {
        if(task.priority === "low") return "success";
        if (task.priority === "medium") return "warning";
        if(task.priority === "high") return "danger"
        return "secondary";
    }
    
    return(
        <Card className="mb-2">
            <Card.Body>
                <Card.Title>
                    <Badge className="me-2" bg={priorityColor()}>
                        {task.priority ? task.priority : "No priority"}
                    </Badge>

                    {task.text}

                </Card.Title>
                <Card.Text>
                    Date: {new Date(task.createdAt).toLocaleDateString()}<br/>
                    Completed: 
                    <input 
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onComplete(task.id)}
                    />
                </Card.Text>
                <div className="d-flex justify-content-evenly align-content-center">
                    <Button variant="danger" onClick={() => onDelete(task.id)}>Delete Task</Button>
                    <Button variant="warning" onClick={() => onEdit(task)}>Edit Task</Button>
                </div>
            </Card.Body>
        </Card>
    )
}