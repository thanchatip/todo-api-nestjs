import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoItem, TodoService } from './app.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getList(): TodoItem[] {
    console.log('todo')
    return this.todoService.getList();
  }

  @Post()
  create(@Body() todo: TodoItem) {
    console.log(todo)
    return this.todoService.create(todo);
  }

}
