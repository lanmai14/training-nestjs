import { Get, Injectable } from '@nestjs/common';
import { CalculateResult } from '../calculate-result.interface';

@Injectable()
export class CalculateService {
  [x: string]: any;
  private calculate: Array<CalculateResult> = [];
}
