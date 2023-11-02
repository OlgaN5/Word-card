import { IsString, IsEmail, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger/dist/decorators";
export class CreateRegisterDto {
    @ApiProperty({
        default: 'test@gmail.com'
    })
    @IsEmail()
    email: string;
    @ApiProperty({
        default: 'login'
    })
    @IsString()
    @MaxLength(10)
    @MinLength(3)
    login: string;
    @ApiProperty({
        default: 'password'
    })
    @IsString()
    @MinLength(6)
    password: string;
}
