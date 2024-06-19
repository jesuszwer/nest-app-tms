import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TaskStatus } from './taskStatus';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsEnum(TaskStatus) // 'OPEN' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'
  status: TaskStatus;
}
