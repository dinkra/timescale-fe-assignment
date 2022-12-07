import formatDate from '../formatDate';

describe('formatDate', () => {
  test('formatDate returns date in MMMM D, YYYY format', () => {
    expect(formatDate('2017-07-07T11:45:13+03:00')).toEqual('July 7, 2017');
  });
});
