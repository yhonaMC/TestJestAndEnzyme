import reducer from '../../reducers';
import ProductMocks from '../../__mocks__/ProductMocks';

describe('Reducers', () => {
  test('Retornar init State', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('ADD_TO_CART', () => {
    const initialState = {
      cart: [],
    };

    const payload = ProductMocks;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };

    const expected = {
      cart: [ProductMocks],
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
