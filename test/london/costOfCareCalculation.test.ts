import { Fields } from '../../src-ts/interfaces';
import { calculator } from '../../src-ts/customers/london/calculator';

import * as chai from 'chai';

const expect = chai.expect;

describe('London Financial Assessment Cost of Care Calculation', () => {

  let formData: Fields;

  beforeEach(() => {
    formData = {
      person: {
        expenses: {},
        income: {},
      },
    };
  });

  describe('cost of care calculation', () => {
      it('should perform the correct calculation', () => {
        formData.person.income.incomeSupportPayment = 100;
        formData.person.expenses.rent = 50;

        const calculation = calculator(formData);
        expect(calculation.contributions.maxContribution).to.equal(50);
    });
  });
});
