import { Injectable } from '@nestjs/common';

export interface TodoItem {
  id: number;
  task: string;
}

let todos: TodoItem[] = [];

@Injectable()
export class TodoService {
  getList(): TodoItem[] {
    return todos;
  }

  create(todo: TodoItem) {
    todos.push(todo);

    return todos;
  }
}
