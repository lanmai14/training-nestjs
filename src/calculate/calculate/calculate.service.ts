import { Injectable } from '@nestjs/common';
import { ICalculate } from '../calculate.interface';

@Injectable()
export class CalculateService {
  getResults(value: ICalculate) {
    return Result(value);
  }
}
const Result = (value: ICalculate) => {
  let { bill, tip, person } = value;
  bill = Number(value.bill);
  tip = Number(value.tip);
  person = Number(value.person);

  const Amount = function () {
    let amount = 0;
    amount = (bill * (tip / 100)) / person;
    return amount;
  };

  const Total = function () {
    let total = 0;
    total = bill / ((bill * (tip / 100)) / person);
    return total;
  };
  let result = {
    result: false,
    total: null,
    amount: null,
  };

  if (bill && !isNaN(tip) && person) {
    result = {
      result: true,
      amount: Amount(),
      total: Total(),
    };
  }

  return JSON.stringify(result);
};
