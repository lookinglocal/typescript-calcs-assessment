import { Fields, CalculationResult } from './interfaces';
import { calculator as londonCalculator } from './customers/london/calculator';
import { calculator as birminghamCalculator } from './customers/birmingham/calculator';

export const calculations = {
  london: {
    calculator: (fields: Fields): CalculationResult => {
      return londonCalculator(fields);
    },
  },

  birmingham: {
    calculator: (fields: Fields): CalculationResult => {
      return birminghamCalculator(fields);
    },
  },
}
