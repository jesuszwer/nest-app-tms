import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { winstonLoggerProvider } from './logger/winston.logger';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './logger/logging.interceptor';

@Module({
  imports: [TaskModule],
  controllers: [AppController],
  providers: [
    AppService,
    winstonLoggerProvider,
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
  ],
})
export class AppModule {}
