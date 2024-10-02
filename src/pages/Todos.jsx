
import TodoTile from "../components/TodoTile";
import { Link } from "react-router-dom";

const Todos = () => {
    return (
        <div>
            <h1>All todos</h1>
            <div>
                <TodoTile title={'Creating a React App'}/>
                <TodoTile title={'Install Tailwind CSS'}/>
                <TodoTile title={'Commit code to Github'}/>
                <TodoTile title={'Post it on Netlify'}/>
            </div>
            <Link to={'/add'}>Add Todo</Link>
        </div>
    )
}

export default Todos;