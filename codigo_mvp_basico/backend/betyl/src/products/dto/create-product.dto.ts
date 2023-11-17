import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  image: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  userId: number;
}