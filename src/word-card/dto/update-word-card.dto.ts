import { PartialType } from '@nestjs/mapped-types';
import { CreateWordCardDto } from './create-word-card.dto';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateWordCardDto extends PartialType(CreateWordCardDto) {
    @ApiProperty({
        default: 'english'
    })
    english?: string;
    @ApiProperty({
        default: 'russian'
    })
    russian?: string;
}
