import { Button, Card } from "react-bootstrap";


export default function TaskItem ({ task }) {
    return(
        <Card>
            <Card.Body>
                <Card.Title>{task.text}</Card.Title>
                <Card.Text>
                    Date: {task.createdAt} <br/>
                    Completed: {task.completed}
                </Card.Text>
                <Button>Delete Task</Button>
            </Card.Body>
        </Card>
    )
}