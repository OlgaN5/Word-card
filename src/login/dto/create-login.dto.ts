import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger/dist/decorators";
export class CreateLoginDto {
    @ApiProperty({
        default:'login'
    })
    @IsString()
    login: string;
    @ApiProperty({
        default:'password'
    })
    @IsString()
    password: string;
}
