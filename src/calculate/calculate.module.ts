import { Module } from '@nestjs/common';
import { CalculateController } from './calculate/calculate.controller';
import { CalculateService } from './calculate/calculate.service';

@Module({
  controllers: [CalculateController],
  providers: [CalculateService]
})
export class CalculateModule {}
