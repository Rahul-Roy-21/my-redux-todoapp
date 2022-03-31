import React from 'react';
import { useSelector } from 'react-redux';

const TodoStats = () => {
  const todos = useSelector(state => state.todos);
  const numTodos = todos.length;
  const numCompleted = todos.filter(todo => todo.completed).length;
  const percentComplete = numTodos>0? (numCompleted*100/numTodos).toFixed(2): 0;

  return (
    <div>
      <h4 className="mt-3">
        Total Completed Items: &nbsp; 
        {numCompleted}/{numTodos} ({percentComplete} %)
      </h4>
    </div>
  )
}

export default TodoStats
