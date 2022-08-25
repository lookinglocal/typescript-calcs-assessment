import {
  Fields,
  CalculationResult,
  IncomeWorkings,
  ExpensesWorkings,
  Workings,
} from '../..//interfaces';

import { IncomeCalculator } from './incomeCalculator';
import { ExpensesCalculator } from './expensesCalculator';

import { CostOfCareCalculator } from '../../calculators/costOfCareCalculator';

import { calculationConfiguration } from './config';

const costOfCareCalculator: CostOfCareCalculator = new CostOfCareCalculator();
const incomeCalculator: IncomeCalculator = new IncomeCalculator(calculationConfiguration);
const expensesCalculator: ExpensesCalculator = new ExpensesCalculator();

export function calculator(fields: Fields): CalculationResult {

  let workings: Workings = {
    grossIncome: 0,
    expensesTotal: 0,
  };

  const grossIncomeCalculation: IncomeWorkings = incomeCalculator.getGrossIncome(fields);
  workings = Object.assign(
    workings,
    grossIncomeCalculation,
  );

  const expensesCalculation: ExpensesWorkings = expensesCalculator.getExpenses(fields);
  workings = Object.assign(
    workings,
    expensesCalculation,
  );

  const costOfCare =  costOfCareCalculator.getCostOfCare(workings);

  return costOfCare;
}
