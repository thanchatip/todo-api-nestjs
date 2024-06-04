import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoItem, TodoService } from './app.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getList(): TodoItem[] {
    return this.todoService.getList();
  }

  @Post()
  create(@Body() todo: TodoItem) {
    return this.todoService.create(todo);
  }
}
