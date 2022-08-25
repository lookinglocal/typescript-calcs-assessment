
export interface IncomeFields {
  incomeSupportPayment?: number;
}

export interface ExpensesFields {
  rent?: number;
}

export type IncomeKey = keyof IncomeFields;

export type ExpenseKey = keyof ExpensesFields;

export type CostKey = IncomeKey & ExpenseKey;

export interface PersonFields {
  income?: IncomeFields;
  expenses?: ExpensesFields;
}

export interface Fields {
  person: PersonFields;
}

export interface CalculationArguments {
  fields: Fields;
}

export interface IncomeWorkings {
  grossIncome: number;
}

export interface ExpensesWorkings {
  expensesTotal: number;
}

export interface Workings extends ExpensesWorkings, IncomeWorkings {
  [key: string]: number;
}

export interface CalculationResult {
  workings: Workings;
  contributions: {
    maxContribution: number;
  };
}

export interface CalculationConfiguration {
  fullIncomeFields?: string[];
}
