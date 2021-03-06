import { state } from "@angular/animations";
import { Todo } from "../../models/todo";
import { TodoActions, todoActionsType, TodoLoadAction } from "./todo.actions";
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
     case todoActionsType.toggle:
      return {
        ...state,
        todoList: state.todoList.map(todo => todo.id === action.payload.id ? {
          todo,
          completed: !todo.completed
        }: todo)
      };
    case todoActionsType.edit:
      return {
        ...state,
        todoList: state.todoList.map(todo => todo.id === action.payload.id ? {
          ...state,
          name:action.payload.name
        } : todo)
      };
     case todoActionsType.delete:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.payload.id)
      };
      case todoActionsType.Load:
        return {
          ...action.payload.state
        }
    default:
      return state;
  }
  return state;
};


