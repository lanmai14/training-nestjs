import { Controller, Get, Query } from '@nestjs/common';
import { ICalculate, ICalculateResult } from '../calculate.interface';
import { CalculateService } from './calculate.service';

@Controller('calculate')
export class CalculateController {
  constructor(private readonly calculateService: CalculateService) {}
  @Get()
  getResults(@Query() value: ICalculate) {
    return this.calculateService.getResults(value);
  }
}
