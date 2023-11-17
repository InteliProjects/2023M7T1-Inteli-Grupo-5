import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserAuthDto {

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}
