import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {colorsAvailable} from './colors';


const Filters = () => {
  const dispatch = useDispatch();

  const todosRemaining = useSelector(state => {
    const uncompletedTodos = state.todos.filter(todo => !todo.completed)
    return uncompletedTodos.length
  });

  const handleClick = (e, c) =>{
    e.target.classList.toggle("toggled");
    dispatch({type: 'filters/colorsFilterToggled', payload: c})
  }

  return (
    <>
      <p>Remaining todos: {todosRemaining}</p>
      <ul>
        {colorsAvailable.map((c, i) => <li key={i} onClick={(e) => handleClick(e, c)}>{c}</li>)}
      </ul>
    </>
  )
}

export default Filters;