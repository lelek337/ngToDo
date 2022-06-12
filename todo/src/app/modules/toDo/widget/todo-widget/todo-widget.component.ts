import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';
import { TodoCreateAction } from '../../store/todo/todo.actions';
import { todoState } from '../../store/todo/todo.reducer';
import { todoListSelector } from '../../store/todo/todoSelectors';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss']
})
export class TodoWidgetComponent implements OnInit {
  todoList$:Observable<Todo[]> = this.store$.pipe(select(todoListSelector));

  constructor(private store$: Store<todoState>) { }

  ngOnInit(): void {
  }

  onCreate(name:string) {
    console.log(name);
    this.store$.dispatch(new TodoCreateAction({name}));
  }
  onDelete(id:number) {

  }
}
