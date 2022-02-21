import React from 'react';
import { useSelector } from 'react-redux';
import AddNewTodo from './AddNewTodo';
import TodoItem from './TodoItem';



const TodoList = () => {
  const todos = useSelector(state => state.todos);

  const itemsToRender = todos.map(todo =>{
    return <TodoItem key={todo.id} todo={todo} />
  })

  return (
    <>
      <AddNewTodo/>
      <ul>{itemsToRender}</ul>
    </>
    )
}

export default TodoList;