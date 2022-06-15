import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListEditUiComponent } from './todo-list-edit-ui.component';

describe('TodoListEditUiComponent', () => {
  let component: TodoListEditUiComponent;
  let fixture: ComponentFixture<TodoListEditUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListEditUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListEditUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
