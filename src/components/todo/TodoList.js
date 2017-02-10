import React from 'react'
import {TodoItem} from './TodoItem'

export const TodoList = (props) => {
  return (
    <div className="Todo-List">
      <ul>
      {/*
        1. The ... before todo is a spread operator: takes all properties of todo,
        and pass into this component on its own property
        2. TodoItem need a key property because each child in an array/interator need a key prop
        */}
        {props.todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
      </ul>
    </div>
  )
}
