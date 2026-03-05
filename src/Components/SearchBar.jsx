import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";


export default function SearchBar ({ setSearchTask }) {
    const [search, setSearch] = useState("");
    
    return(
        <div>
            <InputGroup className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Search task..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <Button 
                    variant="outline-secondary"
                    onClick={() => setSearchTask(search)}
                >
                    Search
                </Button>
            </InputGroup>
        </div>
    )
}