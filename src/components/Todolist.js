import React from 'react';
import Tododisplay from './Tododisplay';

export default function Todolist({
    todoitems, setTodoItems }) {
  return (
    <div>
        {todoitems.map((item) => {
            return (
                <Tododisplay item={item} todoItems={todoItems} setTodoItems={setTodoItems} />
            );
        })}
    </div>
  );
}
