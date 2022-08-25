import {
  Fields,
  ExpensesFields,
  ExpensesWorkings,
} from '../interfaces';

export class AExpensesCalculator {

  protected sumExpensesFields(expensesFields: ExpensesFields): number {
    const expenses = expensesFields.rent;
    return expenses;
  }

  public getExpenses (fields: Fields): ExpensesWorkings {
    const expensesFields: ExpensesFields = fields.person.expenses;

    const expensesTotal = this.sumExpensesFields(expensesFields);

    return {
      expensesTotal,
    };

  }
}
