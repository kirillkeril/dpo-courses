import { PartialType } from '@nestjs/mapped-types';
import { CreateProgramDto } from './create-program.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProgramDto extends PartialType(CreateProgramDto) {
  @ApiProperty()
  public courseId: string;
  @ApiProperty()
  public details: string;
  @ApiProperty()
  public responsiblePersoidId: string;
  @ApiProperty()
  public startDate: Date;
  @ApiProperty()
  public endDate: Date;
  @ApiProperty()
  public load: number;
  @ApiProperty()
  public sheduleId: string;
}
