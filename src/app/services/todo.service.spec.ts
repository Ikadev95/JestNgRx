import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';


describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return todos', (done) => {
    service.getTodos().subscribe(todos => {
      expect(todos).toEqual(['Studiare Angular', 'Fare la spesa']);
      done();
    });
  });
});
