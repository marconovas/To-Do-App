import { Button, Container } from "react-bootstrap";
import "../Css/FilterBar.css";

export default function FilterBar ({ setFilter, setPriorityFilter }) {
    return(
        <div className="filter-bar">
            <h6 className="filter-title">Task Filter</h6>

            <Container className="d-flex justify-content-center gap-2 mb-3">
                <Button size="sm" variant="outline-primary" onClick={() => setFilter("all")}>All</Button>
                <Button size="sm" variant="outline-warning" onClick={() => setFilter("active")}>Active</Button>
                <Button size="sm" variant="outline-success" onClick={() => setFilter("completed")}>Completed</Button>
            </Container>

            <h6 className="filter-title">Priority</h6>
            
            <Container className="d-flex justify-content-center gap-2">
                <Button size="sm" variant="outline-primary" onClick={() => setPriorityFilter("all")}>All</Button>
                <Button size="sm" variant="outline-success" onClick={() => setPriorityFilter("low")}>Low</Button>
                <Button size="sm" variant="outline-warning" onClick={() => setPriorityFilter("medium")}>Medium</Button>
                <Button size="sm" variant="outline-danger" onClick={() => setPriorityFilter("high")}>High</Button>
            </Container>
        </div>
    )
}