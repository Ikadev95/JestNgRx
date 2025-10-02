import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTodo, loadTodos, removeTodo } from '../../store/todo/todo.actions';
import { selectTodoList } from '../../store/todo/todo.selectors';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  newTodo = '';
  todos$!: Observable<string[]>;

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectTodoList);
  }

  ngOnInit() {
    this.store.dispatch(loadTodos());
  }

  onAdd() {
    if (this.newTodo.trim()) {
      this.store.dispatch(addTodo({ todo: this.newTodo }));
      this.newTodo = '';
    }
  }

  onRemove(id: number) {
    this.store.dispatch(removeTodo({ todoId: id }));
  }
}
