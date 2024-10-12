import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../components/ProductCard/ProductCard';
import { Provider } from 'react-redux';
import store from '../redux/store';

const mockProduct = {
  id: 1,
  name: 'Producto de Prueba',
  price: 100,
  image: 'https://via.placeholder.com/150',
};

test('renders ProductCard y agrega al carrito', () => {
  render(
    <Provider store={store}>
      <ProductCard product={mockProduct} />
    </Provider>
  );

  expect(screen.getByText(/Producto de Prueba/i)).toBeInTheDocument();
  expect(screen.getByText(/\$100/i)).toBeInTheDocument();

  const button = screen.getByText(/Agregar al Carrito/i);
  fireEvent.click(button);

  const state = store.getState().cart;
  expect(state.items.length).toBe(1);
  expect(state.items[0].id).toBe(mockProduct.id);
});
