import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
// serve per fornire un Observable finto delle azioni che verranno intercettate dagli effects

import { Observable, of } from 'rxjs';
import { TodoEffects } from './todo.effects';
import { TodoService } from '../../services/todo.service';
import { loadTodos, getTodoList } from './todo.actions';

describe('TodoEffects', () => {
  let actions$: Observable<any>;
  // questo è lo stream simulato delle azioni (quello che normalmente viene da NgRx)

  let effects: TodoEffects;
  let todoService: jest.Mocked<TodoService>;
  // uso jest.Mocked per poter fare il mock dei metodi di TodoService (es. getTodos)

  beforeEach(() => {
    const serviceMock = {
      getTodos: jest.fn()  // creo un mock del metodo getTodos
    };

    TestBed.configureTestingModule({
      providers: [
        TodoEffects,
        provideMockActions(() => actions$), // collego actions$ come stream fittizio
        { provide: TodoService, useValue: serviceMock } // sostituisco il vero service con il mock
      ]
    });

    effects = TestBed.inject(TodoEffects); // prendo l’istanza degli effects
    todoService = TestBed.inject(TodoService) as jest.Mocked<TodoService>;
    // prendo il mock del service
  });

  it('should dispatch getTodoList on loadTodos', (done) => {
    const mockTodos = ['Alpha', 'Beta'];
    todoService.getTodos.mockReturnValue(of(mockTodos));
    // quando viene chiamato getTodos, invece di chiamare il vero service,
    // restituisce subito un Observable con ['Alpha', 'Beta']

    actions$ = of(loadTodos());
    // simulo il dispatch dell’azione loadTodos

    effects.loadTodos$.subscribe(action => {
      // ascolto cosa produce l’effect
      expect(action).toEqual(getTodoList({ todos: mockTodos }));
      // mi aspetto che risponda con l’azione getTodoList coi dati finti
      done();
      // chiudo il test asincrono
    });
  });
});
