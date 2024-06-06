import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoItem, TodoService } from './app.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getList(): TodoItem[] {
    return this.todoService.getList();
  }

  @Get(':id')
  getDetail(@Param('id') id: string): TodoItem {
    return this.todoService.getDetail(parseInt(id));
  }

  @Post()
  create(@Body() todo: TodoItem) {
    return this.todoService.create(todo);
  }

  @Put('/update')
  update(@Body() todo: TodoItem) {
    return this.todoService.update(todo);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todoService.delete(parseInt(id));
  }
}
