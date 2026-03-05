import { Form } from "react-bootstrap";

export default function Sort ({ setSort }) {
    return(
        <div className="mb-2">
            Sort Tasks: 
            <Form.Select
                onChange={e => {
                    console.log(e.target.value);
                    setSort(e.target.value)}
                }
            >
                <option value={"none"}>No sort</option>
                <option value={"high"}>High → Low</option>
                <option value={"low"}>Low → High</option>
            </Form.Select>
        </div>
    )
}