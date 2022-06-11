import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-create-form',
  templateUrl: './todo-create-form.component.html',
  styleUrls: ['./todo-create-form.component.scss']
})
export class TodoCreateFormComponent implements OnInit {
  name = '';
  constructor() { }

  ngOnInit(): void {
    console.log(this.name)
  }

  onCreate() {
    console.log(this.name)
  }

}
