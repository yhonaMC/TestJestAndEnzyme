import React from 'react';
import { mount, shallow } from 'enzyme'; //
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMocks';
import Header from '../../components/Header.jsx';

describe('<Header/>', () => {
  test('Render de componente Header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );

    expect(header.length).toEqual(1);
  });

  test('Redender del titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('header snapShot', () => {
  test('Comprobar el Snapshot de header', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
