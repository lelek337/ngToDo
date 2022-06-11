import { Todo } from "../../models/todo";
import { TodoActions, todoActionsType } from "./todo.actions";

export const TODO_REDUCER_NODE = 'todo';


export interface todoState {
  idIncrement:number;
  todoList:Todo[];
}

const instalState:todoState = {
  idIncrement: 1,
  todoList: []
}

export const todoReducer = (state:todoState = instalState, action:TodoActions) => {
  switch(action.type) {
    case todoActionsType.create:
     return {
       ...state,
       idIncrement: state.idIncrement + 1,
       todoList: [
         ...state.todoList,
         {
           id: state.idIncrement,
           name: action.payload.name,
           completed: false
         }
       ]
     };
    default:
      return state;
  }
  return state;
};


