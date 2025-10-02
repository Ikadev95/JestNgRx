import { createReducer, on } from '@ngrx/store';
import { addTodo, getTodoList, loadTodos, removeTodo } from './todo.actions';

export interface TodoState {
  todos: string[];
  loading: boolean;
  error: string;
}

export const initialState: TodoState = {
  todos: [],
  loading: false,
  error: ''
};

export const todoReducer = createReducer(
  initialState,
  on(loadTodos, (state) => ({ ...state, loading: true, error: '' })),
  on(getTodoList, (state, { todos }) => ({ ...state, todos, loading: false })),
  on(addTodo, (state, { todo }) => ({ ...state, todos: [...state.todos, todo] })),
  on(removeTodo, (state, { todoId }) => ({ ...state, todos: state.todos.filter((_, i) => i !== todoId) }))
);
