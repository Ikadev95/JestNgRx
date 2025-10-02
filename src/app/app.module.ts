import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { todoReducer } from './store/todo/todo.reducer';
import { TodoEffects } from './store/todo/todo.effects';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ todos: todoReducer}),
    EffectsModule.forRoot([TodoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
