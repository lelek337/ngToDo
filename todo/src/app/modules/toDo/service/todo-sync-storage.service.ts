import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { TodoLoadAction } from '../store/todo/todo.actions';
import { todoState } from '../store/todo/todo.reducer';
import { todoFeatureSelector } from '../store/todo/todoSelectors';

export const TODO_LOCALSTORAG_KEY = 'todo';

@Injectable({
  providedIn: 'root'
})
export class TodoSyncStorageService {
  private isInit = false;

  constructor(private store$:Store<todoState>) { }
  init() {
    if(this.isInit) {
      return;
    }
    this.isInit = true;
    this.loadFromStorage();

    this.store$.pipe(
      select(todoFeatureSelector),
      filter(state => !!state)
    ).subscribe(state => {
      localStorage.setItem(TODO_LOCALSTORAG_KEY, JSON.stringify(state))
    });
    window.addEventListener('storage', () => this.loadFromStorage())
  }



  private loadFromStorage() {
    const storageState = localStorage.getItem(TODO_LOCALSTORAG_KEY);
    if(storageState) {
      this.store$.dispatch(new TodoLoadAction({
        state: JSON.parse(storageState)
      }))
    }

  }
}
