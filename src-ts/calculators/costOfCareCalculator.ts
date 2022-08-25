import {
  CalculationResult,
  Workings,
} from '../interfaces';

export class CostOfCareCalculator {

  getCostOfCare(workings: Workings): CalculationResult {

    const applicantNetIncome = workings.grossIncome -
      workings.expensesTotal;

    const maxContribution = Math.max(applicantNetIncome, 0);

    const calculationResults = {
      contributions: {
        maxContribution,
      },
      workings: workings,
    };

    return calculationResults;
  }
}
