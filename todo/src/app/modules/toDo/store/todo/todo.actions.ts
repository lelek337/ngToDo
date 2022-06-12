import { Action } from "@ngrx/store";

export enum todoActionsType {
  create = '[TODO] create todo items',
  delete = '[TODO] delete todo items',
};

export class TodoCreateAction implements Action {
  readonly type: string = todoActionsType.delete;

  constructor(public payload:{name:string} ) {
  }
}

export class TodoDeleteAction implements Action {
  readonly type: string = todoActionsType.create;

  constructor(public payload:{id:number} ) {
  }
}
export type TodoActions = TodoCreateAction | TodoDeleteAction;
