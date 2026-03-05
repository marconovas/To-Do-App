import { Badge, Button, Card } from "react-bootstrap";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "../Css/TaskCard.css";

export default function TaskItem ({ task, onComplete, onDelete, onEdit }) {

    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({ id: task.id });
    
    return(
        <div 
            ref={setNodeRef}
            style={{
                transform: CSS.Transform.toString(transform),
                transition
            }}
        >

            <Card className="task-card">
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                            <span
                                {...attributes}
                                {...listeners}
                                className="drag-handle"
                            >
                                ☰
                            </span>

                            <span className={`priority-${task.priority || "none"}`}>
                                {task.priority || "no priority"}
                            </span>

                            <span className={task.completed? "text-decoration-line-through" : ""}>
                                {task.text}
                            </span>
                        </div>
                    </Card.Title>

                    <Card.Text>
                        Date: {new Date(task.createdAt).toLocaleDateString()}<br/>
                        Completed <span> </span> 
                        <input 
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => onComplete(task.id)}
                        />
                    </Card.Text>

                    <div className="d-flex justify-content-evenly align-content-center">
                    
                        <Button variant="outline-danger" size="sm" onClick={() => onDelete(task.id)}>Delete Task</Button>
                    
                        <Button variant="outline-warning" size="sm" onClick={() => onEdit(task)}>Edit Task</Button>
                    
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}