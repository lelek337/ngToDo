import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { todoReducer, TODO_REDUCER_NODE } from './store/todo/todo.reducer';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { RouterModule } from '@angular/router';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component';
import { TodoCreateFormComponent } from './ui/todo-create-form/todo-create-form.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
  TodoPageComponent,
  TodoWidgetComponent,
  TodoCreateFormComponent,

  ],
  imports: [
    FormsModule,
    TodoRoutingModule,
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
  ]
})
export class TodoModule { }
