import { ApiProperty } from "@nestjs/swagger/dist"
import { IsString } from "class-validator"
export class CreateWordCardDto {
    @ApiProperty({
        description: 'english word',
        default: 'english'
    })
    @IsString()
    english: string;
    @ApiProperty({
        default: 'russian'
    })
    @IsString()
    russian: string;

}
