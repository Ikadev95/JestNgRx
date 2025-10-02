import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TodoState } from '../../store/todo/todo.models';
import { selectTodoList } from '../../store/todo/todo.selectors';
import { addTodo, removeTodo } from '../../store/todo/todo.actions';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let store: MockStore;
  const initialState: TodoState = { todos: [], loading: false, error: '' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoComponent],
      imports: [FormsModule],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a todo', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    component.newTodo = 'Task 1';
    component.onAdd();
    expect(dispatchSpy).toHaveBeenCalledWith(addTodo({ todo: 'Task 1' }));
    expect(component.newTodo).toBe('');
  });

  it('should remove a todo', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    component.onRemove(0);
    expect(dispatchSpy).toHaveBeenCalledWith(removeTodo({ todoId: 0 }));
  });
});
