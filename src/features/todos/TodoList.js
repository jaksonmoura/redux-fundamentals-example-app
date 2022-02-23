import React from 'react'
import { useSelector } from 'react-redux'
import AddNewTodo from './AddNewTodo'
import TodoItem from './TodoItem'


const TodoList = () => {
  const {todos, filters} = useSelector(state => state);
  console.log(todos);
  console.log(filters);

  const itemsToRender = todos.map(todo =>{
    console.log(filters.colors.includes(todo.color))
    if (filters.colors.length > 0) {
      if (filters.colors.includes(todo.color)){
        return <TodoItem key={todo.id} todo={todo} />
      } 
      return []
    } else {
      return <TodoItem key={todo.id} todo={todo} />
    }
  })

  return (
    <>
      <AddNewTodo />
      <ul>{itemsToRender}</ul>
    </>
  )
}

export default TodoList
