import { Module } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import { ProgramModule } from './program/program.module';

@Module({
  imports: [CoursesModule, ProgramModule],
})
export class AppModule {}
