import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { todoReducer, TODO_REDUCER_NODE } from './store/todo/todo.reducer';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component';
import { TodoCreateFormComponent } from './ui/todo-create-form/todo-create-form.component';
import { FormsModule } from '@angular/forms';
import { TodoListUiComponent } from './ui/todo-list-ui/todo-list-ui.component';
import { TodoListItemComponent } from './ui/todo-list-item/todo-list-item.component';
import { TodoListEditUiComponent } from './ui/todo-list-edit-ui/todo-list-edit-ui.component';

@NgModule({
  declarations: [
  TodoPageComponent,
  TodoWidgetComponent,
  TodoCreateFormComponent,
  TodoListUiComponent,
  TodoListItemComponent,
  TodoListEditUiComponent
  ],
  imports: [
    FormsModule,
    TodoRoutingModule,
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
  ]
})
export class TodoModule { }
