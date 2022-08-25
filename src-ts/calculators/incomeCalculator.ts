import {
  Fields,
  IncomeFields,
  IncomeKey,
  IncomeWorkings,
  CalculationConfiguration,
} from '../interfaces';

export class AIncomeCalculator {

  public calculationConfiguration: CalculationConfiguration;

  constructor(
    calculationConfiguration: CalculationConfiguration,
  ) {
    this.calculationConfiguration = calculationConfiguration;
  }

  private sumCostFields(costFields: IncomeFields, costSources: string[]): number {
    const total = costSources.reduce((runningTotal: number, incomeType: IncomeKey): number => {
      const amount = costFields[incomeType] as number;

      return runningTotal + amount;
    }, 0);

    return total;
  }

  protected sumBasicIncomeFields(incomeFields: IncomeFields): number {
    const fullIncomeFields: string[] = this.calculationConfiguration.fullIncomeFields;
    return this.sumCostFields(incomeFields, fullIncomeFields);
  }

  public getGrossIncome(fields: Fields): IncomeWorkings {
    const incomeFields = fields.person.income || {};
    const grossIncome = this.sumBasicIncomeFields(incomeFields);

    return {
      grossIncome,
    };
  }
}
