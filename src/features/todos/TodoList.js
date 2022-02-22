import React from 'react'
import { useSelector } from 'react-redux'
import AddNewTodo from './AddNewTodo'
import TodoItem from './TodoItem'

const TodoList = () => {
  const { todos, filters } = useSelector((state) => state)

  const itemsToRender = () => {
    let itemsFiltered = todos.filter(todo =>  {
      if (filters.colors.includes(todo.colors)){
        return todo
      }
      return {}
    })
    console.log(itemsFiltered)
    itemsFiltered.map((todo) => {
      return <TodoItem key={todo.id} todo={todo} />
    })
  }

  return (
    <>
      <AddNewTodo />
      <ul>{itemsToRender}</ul>
    </>
  )
}

export default TodoList
