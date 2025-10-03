import { todoReducer, initialState } from './todo.reducer';
import { addTodo, removeTodo, getTodoList, loadTodos } from './todo.actions';
import { TodoState } from './todo.models';

describe('Todo Reducer', () => {
  it('should return the initial state for unknown action', () => {
    const state = todoReducer(undefined, { type: 'UNKNOWN' } as any);
    expect(state).toBe(initialState);
  });

  it('should set loading true on loadTodos', () => {
    const action = loadTodos();
    const newState = todoReducer(initialState, action);
    expect(newState.loading).toBe(true);
  });

  it('should handle getTodoList', () => {
    const todos = ['X', 'Y'];
    const action = getTodoList({ todos });
    const newState = todoReducer(initialState, action);
    expect(newState.todos).toEqual(todos);
    expect(newState.loading).toBe(false);
  });

  it('should add a todo', () => {
    const state: TodoState = { ...initialState, todos: ['A'] };
    const action = addTodo({ todo: 'B' });
    const newState = todoReducer(state, action);
    expect(newState.todos).toEqual(['A', 'B']);
  });

  it('should remove a todo', () => {
    const state: TodoState = { ...initialState, todos: ['A', 'B', 'C'] };
    const action = removeTodo({ todoId: 1 });
    const newState = todoReducer(state, action);
    expect(newState.todos).toEqual(['A', 'C']);
  });
});
