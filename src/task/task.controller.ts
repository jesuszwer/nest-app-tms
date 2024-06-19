import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './task.dto';

@Controller('task')
export class TaskController {
  constructor(
    @Inject('winstonLogger') private readonly logger,
    private readonly taskService: TaskService,
  ) {}

  @Get('')
  async findAllTasks() {
    return this.taskService.findAllTasks();
  }

  @Get('/:id')
  async findTask(@Param('id') id: number) {
    return this.taskService.findTask(+id);
  }

  @UsePipes(new ValidationPipe())
  @Post('')
  async createTask(@Body() dto: CreateTaskDto) {
    return this.taskService.createTask(dto);
  }

  @Patch('/:id')
  async changeTaskStatus(@Param('id') id: number, @Body() dto: CreateTaskDto) {
    return this.taskService.changeTaskStatus(+id, dto);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number) {
    this.logger.warn(`Deleting task with id: ${id}`);
    return this.taskService.deleteTask(+id);
  }
}
