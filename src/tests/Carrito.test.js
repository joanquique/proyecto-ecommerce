// src/tests/Carrito.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../redux/slices/cartSlice'; 
import Carrito from '../pages/Carrito/Carrito'; // Ajusta la ruta según tu estructura de carpetas

const store = createStore(rootReducer); // Crea tu store

test('renders carrito with items', () => {
    const items = [
        { id: 1, name: 'Producto 1', price: '100' },
        { id: 2, name: 'Producto 2', price: '200' },
    ];

    render(
        <Provider store={store}>
            <Carrito items={items} />
        </Provider>
    );

    const cartItem = screen.getByText(`${items[0].name}: ${items[0].price}`);
    expect(cartItem).toBeInTheDocument();
});
