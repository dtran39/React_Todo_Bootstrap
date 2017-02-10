import React from 'react';
// Define this component as a plain error  js function
// Return value will go inside  the parenthesis as an jsx form
export const TodoForm = (props) => (
  <form>
    {/* Bind handleInputChange to onChange event*/}
    <input type="text"
      onChange={props.handleInputChange}
      value={props.currentTodo}/>
  </form>
)
