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

  getDetail(id: number): TodoItem {
    return todos.find((item) => item.id === id);
  }

  create(todo: TodoItem) {
    todos.push(todo);
    return todos;
  }

  update(todo: TodoItem) {
    const index = todos.findIndex((item) => item.id === todo.id);
    todos[index] = todo;
    return todos;
  }

  delete(id: number) {
    const index = todos.findIndex((item) => item.id === id);
    todos.splice(index, 1);
    return todos;
  }
}
