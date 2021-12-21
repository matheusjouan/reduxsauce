
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as TodoActions } from './store/ducks/todos';
import "./styles.css";

const TodoList = () => {

  const [todoName, setTodoName] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(TodoActions.addTodo(todoName));
    setTodoName("");
  }

  const toggleTodo = id => {
    dispatch(TodoActions.toggleTodo(id));
  }

  const removeTodo = id => {
    dispatch(TodoActions.removeTodo(id));
  }

  return (
    <section>
        <form onSubmit={handleSubmit}>
          <input onChange={e => setTodoName(e.target.value)}/>
          <button type="submit">Novo</button>
        </form>

        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.complete ? <s>{todo.text}</s> : todo.text}
              <div>
                <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
                <button onClick={() => removeTodo(todo.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
  )
}

export default TodoList;