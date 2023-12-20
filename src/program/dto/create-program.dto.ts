import { ApiProperty } from '@nestjs/swagger';

export class CreateProgramDto {
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
