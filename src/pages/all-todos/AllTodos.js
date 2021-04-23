import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { todosState, todoSelector } from '../../store';
import DELETE_ICON from '../../assets/icons/delete.svg';
import './AllTodos.css';

const AllTodos = () => {
  const todos = useRecoilValue(todosState);
  const removeTodo = useSetRecoilState(todoSelector);
  
  const renderTodo = (todo) => {
    return (
      <li key={todo.id} className="todo-item">
        <div className="todo-item__header">
          <span className="todo-item__date">{todo.date}</span>
          <span className="todo-item__time">{todo.time}</span>
          <button type="button" className="todo-item__delete" onClick={() => removeTodo({ type: 'DELETE', payload: todo.id })}>
            <img src={DELETE_ICON} alt="delete" />
          </button>
        </div>
        <div className="todo-item__label">
          {todo.label}
        </div>
        <div className="todo-item__note">
          {todo.note}
        </div>
      </li>
    )
  };

  return (
    <div className="todos-container">
      {todos?.length ? (
        <ul className="todo-items">
          {
            todos.map((item) => renderTodo(item))
          }
        </ul>
      ) : null}
    </div>
  );
};

export default AllTodos;