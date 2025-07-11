import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    example: 1,
    description: 'User id',
    type: 'integer',
    required: true,
  })
  id!: number;
}
