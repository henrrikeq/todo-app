import { useNavigate } from "react-router-dom";

const AddToDo = () => {
    const navigate = useNavigate();

    const saveTodo = (event) => {
        event.preventDefault();
        // post data to todo api
        // go to the homepage
        navigate('/');
    }

    return (
        <div>
            <h1>Add a new Todo</h1>
            <form onSubmit={saveTodo}>
            <input type="text" placeholder="Enter Task" required/>
            <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default AddToDo;