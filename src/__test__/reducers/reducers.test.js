import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Retornar initial state', () => {
    const initialState = { cart: [] }
    const action = { type: 'ADD_TO_CART', payload: ProductMock }
    expect(reducer(initialState, action)).toEqual({ cart: [ProductMock] });
  })
});
