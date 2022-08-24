import react, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState('')
};
const handleChange = e => {
  setInput(e.target.value);
};
const handleSubmit = e => {
  // e.preventDefault();
  // props.onSubmit({
  //   id: Math.floor(math.random() * 10000),
  //   text: input
  // });
  setInput('');
};

const Form = () => {
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Add a todo" value={input} name="text" className="todo-input" onChange={handleChange}>
        <button className="todo-button">Add todo</button>
      </input>
    </form>
  )
}

export default Form;