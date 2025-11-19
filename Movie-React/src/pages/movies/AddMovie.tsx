import { NavLink } from "react-router";
import Button from "react-bootstrap/Button";

function AddMovie() {
    return <div>
        <div>
            <h2>Add Movie</h2>
            <Button variant="btn btn-primary"> List Movie </Button>
        </div>
            <NavLink to="/">Movie Page</NavLink>
        </div>
}

export default AddMovie;