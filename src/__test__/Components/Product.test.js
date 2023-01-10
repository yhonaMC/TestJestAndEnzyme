import React from 'react';
import { mount, shallow } from 'enzyme'; //
import ProviderMock from '../../__mocks__/ProviderMocks';
import Product from '../../components/Product.jsx';
import ProductMocks from '../../__mocks__/ProductMocks';

describe('<Product/>', () => {
  test('Render del componente product', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );
    expect(product.length).toEqual(1);
  });

  test('comprobar el boton de comprar', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product product={ProductMocks} handleAddToCart={handleAddToCart} />
      </ProviderMock>
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
