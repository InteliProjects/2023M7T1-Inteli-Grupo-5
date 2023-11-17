import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {

    @ApiProperty()
    zipCode: string;

    @ApiProperty()
    country: string;

    @ApiProperty()
    state: string;

    @ApiProperty()
    city: string;

    @ApiProperty()
    neighborhood: string;

    @ApiProperty()
    street: string;

    @ApiProperty()
    addressLine: string;

    @ApiProperty()
    userId: number;
}
