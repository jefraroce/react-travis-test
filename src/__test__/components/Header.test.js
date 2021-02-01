import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from '../../components/Header'
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('<Header />', () => {
  test('Header has been mounted', () => {
    // User mount cuando NO se necesita validar algo de la estructura interna del DOM. Porque es más ligero.
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    // header.length valida que el componente se haya montado si es igual a 1 (uno)
    expect(header.length).toEqual(1);
  })

  test("Header has 'Platzi Store' as title", () => {
    // User mount cuando se necesita validar algo de la estructura interna del DOM
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  })

});

describe('Header Snapshot', () => {
  test('Comprobar el Snapshot de Header', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    )

    expect(header.toJSON()).toMatchSnapshot();
  })
})
