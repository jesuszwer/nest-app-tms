import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { CreateTaskDto } from './task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(
    private prisma: PrismaService,
    @Inject('winstonLogger') private readonly logger: LoggerService,
  ) {}

  async findAllTasks() {
    return this.prisma.task.findMany();
  }

  async findTask(id: number) {
    return this.prisma.task.findUnique({ where: { id: +id } });
  }

  async createTask(createTaskDto: CreateTaskDto) {
    return await this.prisma.task.create({
      data: createTaskDto,
    });
  }

  async changeTaskStatus(id: number, updatedData: CreateTaskDto) {
    return this.prisma.task.update({
      where: { id: +id },
      data: updatedData,
    });
  }

  async deleteTask(id: number) {
    return this.prisma.task.delete({ where: { id: +id } });
  }
}
