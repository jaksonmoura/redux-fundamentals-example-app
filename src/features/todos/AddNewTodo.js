import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


const AddNewTodo = () => {
  const [text, setText] = useState("")
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("newTodoItem ", text);
    dispatch({type: 'todos/todoAdded', payload: text})
    setText("");
  }
  
  const handleChange = (event) => {
    event.persist();
    setText(prevState => event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => handleChange(e)} />
      <button>Add</button>
    </form>
  )
}

export default AddNewTodo