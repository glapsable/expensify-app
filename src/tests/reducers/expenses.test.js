import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';

test('should setup expence state with default value', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '3' });
  expect(state).toEqual([
    expenses[0], expenses[1],
  ]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1',
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should edit expense by id', () => {
  const description = 'test-test-test';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '3',
    updates: {
      description,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    expenses[0], expenses[1], { ...expenses[2], description },
  ]);
});

test('should not edit expense if id if not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description: 'test-test-test',
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense to state', () => {
  const expense = {
    id: '4',
    description: 'Dupa z roxy',
    note: '',
    amount: 600,
    createdAt: 0,
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    ...expenses,
    expense,
  ]);
});
