import { createAction, props } from '@ngrx/store';

export const loadTodos = createAction('[Todo Component] Load Todos');
export const getTodoList = createAction('[Todo Component] Get Todo List', props<{ todos: string[] }>());
export const addTodo = createAction('[Todo Component] Add Todo', props<{ todo: string }>());
export const removeTodo = createAction('[Todo Component] Remove Todo', props<{ todoId: number }>());
