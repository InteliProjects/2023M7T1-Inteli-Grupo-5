import { ApiProperty } from '@nestjs/swagger';
import { CreateAddressDto } from 'src/addresses/dto/create-address.dto';

export class CreateUserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  pix: string;

  @ApiProperty()
  question: string;

  @ApiProperty()
  answer: string;

  @ApiProperty()
  CPF: string;

  @ApiProperty()
  CNPJ: string;

  @ApiProperty()
  opensAt: string;

  @ApiProperty()
  closesAt: string;

  @ApiProperty()
  address: CreateAddressDto;
}
