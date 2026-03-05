import { Button, Container } from "react-bootstrap";

export default function FilterBar ({ setFilter, setPriorityFilter }) {
    return(
        <div className="m-3">
            <h4 className="d-flex justify-content-center">Task Filter</h4>

            <Container className="d-flex justify-content-evenly m-1">
                <Button variant="primary" onClick={() => setFilter("all")}>All Tasks</Button>
                <Button variant="warning" onClick={() => setFilter("active")}>Active</Button>
                <Button variant="success" onClick={() => setFilter("completed")}>Completed</Button>
            </Container>

            <h4 className="d-flex justify-content-center">Priority Filter</h4>
            
            <Container className="d-flex justify-content-evenly m-1">
                <Button variant="primary" onClick={() => setPriorityFilter("all")}>All</Button>
                <Button variant="success" onClick={() => setPriorityFilter("low")}>Low</Button>
                <Button variant="warning" onClick={() => setPriorityFilter("medium")}>Medium</Button>
                <Button variant="danger" onClick={() => setPriorityFilter("high")}>High</Button>
            </Container>
        </div>
    )
}