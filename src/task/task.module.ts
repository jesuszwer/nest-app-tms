import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { winstonLoggerProvider } from 'src/logger/winston.logger';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [TaskService, PrismaService, winstonLoggerProvider],
})
export class TaskModule {}
