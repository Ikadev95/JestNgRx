import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService {
  getTodos() {
    const log$ = of(['Studiare Angular', 'Fare la spesa'])
    return log$;
  }
}
