import { ApiProperty } from "@nestjs/swagger/dist/decorators";
export class CreateUserDto {
    id?: number;
    @ApiProperty()
    login: string;
    @ApiProperty()
    email: string;
}