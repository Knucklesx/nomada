import { PartialType } from '@nestjs/mapped-types';
import { CreateBurguerDto } from './create-burguer.dto';

export class UpdateBurguerDto extends PartialType(CreateBurguerDto) {}
