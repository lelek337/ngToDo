import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {
  @Input()
  todo: Todo;
  @Output()
  edit = new EventEmitter<void>();
  @Output()
  delete = new EventEmitter<void>();
  @Output()
  toggle = new EventEmitter<void>();
  constructor() { }
  ngOnInit(): void {
  }
  onEdit() {
    this.edit.emit();
  }
  onDelete() {
    this.delete.emit();
  }
  onToggle() {
    this.toggle.emit();
  }
}
