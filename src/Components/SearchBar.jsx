import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import "../Css/SearchBar.css"

export default function SearchBar({ setSearchTask }) {
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        setSearchTask(search);
    }

    return (
        <div className="search-bar mb-3">
        <InputGroup>
            <Form.Control
            type="text"
            placeholder="Search task..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <Button
            variant="primary"
            onClick={handleSearch}
            disabled={!search.trim()}
            >
            Search
            </Button>
        </InputGroup>
        </div>
    );
}