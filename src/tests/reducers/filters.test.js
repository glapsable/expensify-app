import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filterReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should setup filter state with set text', () => {
  const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'test1' });
  expect(state.text).toBe('test1');
});

test('should setup filter state with sort by amount action type', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should setup filter state with sort by date action type', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };
  const state = filterReducer(currentState, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('should setup filter state with set start date action type', () => {
  const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0) });
  expect(state.startDate).toEqual(moment(0));
});

test('should setup filter state with set end date action type', () => {
  const state = filterReducer(undefined, { type: 'SET_END_DATE', endDate: moment(0) });
  expect(state.endDate).toEqual(moment(0));
});
