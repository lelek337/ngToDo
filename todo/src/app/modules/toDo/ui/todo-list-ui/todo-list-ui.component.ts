import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.scss']
})
export class TodoListUiComponent implements OnInit {
  editIds:number[] = [];
  @Input()
  todoList: Todo[] = [];
  @Input()
  todo: Todo;
  @Output()
  delete = new EventEmitter<number>();
  @Output()
  toggle = new EventEmitter<number>();
  @Output()
  edit = new EventEmitter<{name:string, id:number}>();
  constructor() { }
  ngOnInit(): void {
  }
  onDelete(id:number) {
    this.delete.emit();
  }
  onEditMode(id:number) {
    this.editIds.push(id);
  }
  onToggle(id:number) {
    this.toggle.emit(id);
  }
  onEdit(name:string, id:number) {
    this.editIds = this.editIds.filter(item => item !== id);
    this.edit.emit({name, id})
  }
}
