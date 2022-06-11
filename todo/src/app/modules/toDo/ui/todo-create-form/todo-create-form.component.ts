import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-create-form',
  templateUrl: './todo-create-form.component.html',
  styleUrls: ['./todo-create-form.component.scss']
})
export class TodoCreateFormComponent implements OnInit {
  name = '';
  @Output()
  create = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.name);
  }

  onCreate() {
    if (this.name) {
      this.create.emit(this.name);
      this.name = '';
    }
  }
}
