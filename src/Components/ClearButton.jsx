import { Button, Container } from "react-bootstrap";

export default function ClearButton ({ clearTasks }) {
    return(
        <div className="d-flex justify-content-center my-3">
            <Button
                variant="danger"
                onClick={clearTasks}
            >
                Clear Finished Tasks
            </Button>
        </div>
    )
}