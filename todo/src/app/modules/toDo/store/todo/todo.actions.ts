import { Action } from "@ngrx/store";

export enum todoActionsType {
  create = '[TODO] create todo items',
  delete = '[TODO] delete todo items',
  toggle = '[TODO] toggle todo items',
  edit = '[TODO] edit todo items',
};

export class TodoCreateAction implements Action {
  readonly type = todoActionsType.create;

  constructor(public payload:{name:string} ) {
  }
}

export class TodoDeleteAction implements Action {
  readonly type = todoActionsType.delete;

  constructor(public payload:{id:number} ) {
  }
}
export class TodoToggleAction implements Action {
  readonly type = todoActionsType.toggle;

  constructor(public payload:{id:number} ) {
  }
}
export class TodoEditAction implements Action {
  readonly type = todoActionsType.edit;

  constructor(public payload:{id:number, name:string} ) {
  }
}
export type TodoActions = TodoCreateAction | TodoDeleteAction | TodoToggleAction | TodoEditAction;
