import { Controller, Get, Param, ParseIntPipe, Req } from '@nestjs/common';
import { CalculateResult } from '../calculate-result.interface';
import { CalculateService } from './calculate.service';

@Controller('calculate')
export class CalculateController {
  calculate: CalculateResult[];
  constructor(private readonly calculateService: CalculateService) {}
  @Get(':id')
  findAll(@Param('id', ParseIntPipe) id: number): string {
    return 'This action returns all cats';
  }
}
