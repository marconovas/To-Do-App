import { Button } from "react-bootstrap";

export default function FilterBar ({ setFilter }) {
    return(
        <div className="d-flex justify-content-evenly m-3">
            <Button variant="primary" onClick={() => setFilter("all")}>All Tasks</Button>
            <Button variant="warning" onClick={() => setFilter("active")}>Active</Button>
            <Button variant="success" onClick={() => setFilter("completed")}>Completed</Button>
        </div>
    )
}