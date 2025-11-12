import { NavLink } from "react-router";

function Movies() {
    return <div>
        <h2>Movie Page</h2>
        <NavLink to="/add-movie">Add Movie Page</NavLink>
    </div>
    
}

export default Movies;