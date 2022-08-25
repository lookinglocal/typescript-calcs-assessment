import { Fields } from '../../src-ts/interfaces';
import { calculator } from '../../src-ts/customers/london/calculator';

import * as chai from 'chai';

const expect = chai.expect;

describe('London Financial Assessment Income Calculation', () => {

  let formData: Fields;

  beforeEach(() => {
    formData = {
      person: {
        expenses: {},
        income: {},
      },
    };
  });

  describe('gross income calculation', () => {
      it('should add 100% income support to gross income', () => {
        formData.person.income.incomeSupportPayment = 100;

        const calculation = calculator(formData);
        expect(calculation.workings.grossIncome).to.equal(100);
    });
  });
});
