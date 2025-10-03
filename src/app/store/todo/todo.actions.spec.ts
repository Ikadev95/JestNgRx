import { addTodo, removeTodo, loadTodos, getTodoList } from './todo.actions';

describe('Todo Actions', () => {
  it('should create addTodo action', () => {
    const action = addTodo({ todo: 'Test' });
    expect(action.type).toBe('[Todo Component] Add Todo');
    expect(action.todo).toBe('Test');
  });

  it('should create removeTodo action', () => {
    const action = removeTodo({ todoId: 2 });
    expect(action.type).toBe('[Todo Component] Remove Todo');
    expect(action.todoId).toBe(2);
  });

  it('should create loadTodos action', () => {
    const action = loadTodos();
    expect(action.type).toBe('[Todo Component] Load Todos');
  });

  it('should create getTodoList action', () => {
    const todos = ['A', 'B'];
    const action = getTodoList({ todos });
    expect(action.type).toBe('[Todo Component] Get Todo List');
    expect(action.todos).toBe(todos);
  });
});
