import react, { useState } from "react"; import Form from './Form';

const TodoList = () => {
    const [todos, setTodos] = useState([])
    return(
        <div>
            <h1>What's the plan for Today?</h1>
            <Form />
        </div>
    );
}

export default TodoList;