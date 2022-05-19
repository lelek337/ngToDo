import { Action } from "@ngrx/store";

export enum todoActionsType {
  create = '[TODO] create todo items'
};

export class TodoCreateAction implements Action {
  readonly type: string = todoActionsType.create;

  constructor(public payload:{name:string} ) {

  }
}
export type TodoActions = TodoCreateAction;
