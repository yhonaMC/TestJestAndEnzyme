import actions from '../../actions';
import ProductMocks from '../../__mocks__/ProductMocks';

describe('actions', () => {
  const payload = ProductMocks;
  const expected = action => ({
    type: action,
    payload,
  });

  test('addToCart', () => {
    expect(actions.addToCart(payload)).toEqual(expected('ADD_TO_CART'));
  });

  test('removeToCart', () => {
    expect(actions.removeFromCart(payload)).toEqual(
      expected('REMOVE_FROM_CART')
    );
  });
});
