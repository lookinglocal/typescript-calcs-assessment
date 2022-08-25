import { Fields } from '../../src-ts/interfaces';
import { calculator } from '../../src-ts/customers/london/calculator';

import * as chai from 'chai';

const expect = chai.expect;

describe('Birmingham Financial Assessment Expenses Calculation', () => {

  let formData: Fields;

  beforeEach(() => {
    formData = {
      person: {
        expenses: {},
        income: {},
      },
    };
  });

  describe('expenses calculation', () => {
      it('should add 100% rent to expenses total', () => {
        formData.person.expenses.rent = 100;

        const calculation = calculator(formData);
        expect(calculation.workings.expensesTotal).to.equal(100);
    });
  });
});
