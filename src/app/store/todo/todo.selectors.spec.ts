import { selectTodoList } from './todo.selectors';
import { TodoState } from './todo.models';

describe('Todo Selectors', () => {
  it('should select todo list', () => {
    const state = {
      todos: {
        todos: ['A', 'B', 'C'],
        loading: false,
        error: ''
      }
    } as any;  // struttura globale dello store

    const result = selectTodoList(state);
    expect(result).toEqual(['A', 'B', 'C']);
  });
});
