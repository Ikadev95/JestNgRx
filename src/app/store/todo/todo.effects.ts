import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError } from 'rxjs/operators';
import { loadTodos, getTodoList } from './todo.actions';
import { TodoService } from '../../services/todo.service';
import { of } from "rxjs";

@Injectable()
export class TodoEffects {

  private actions$ = inject(Actions)
   private todoService = inject(TodoService)

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() =>
        this.todoService.getTodos().pipe(
          map((todos) => getTodoList({ todos })),
          catchError((error) => of({ type: '[Todo API] Load Todos Failed', error: error.message }))
        )
      )
    )
  );
}


