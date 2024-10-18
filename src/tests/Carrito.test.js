import React from 'react';
import { render, screen } from '@testing-library/react';
import Carrito from '../pages/Carrito/Carrito';

describe('Cart component', () => {
    it('should display the items in the cart', () => {
        const items = [
            { id: 1, name: 'Playera', price: 300 },
            { id: 2, name: 'Sueter', price: 400 },
        ];

        render(<Carrito items= {items}/>);

        const cartItem = screen.getByText(`${items[0].name}: ${items[0].price}`);
        expect(cartItem).toBeInDocument();

        const cartItem2 = screen.getByText(`${items[1].name}: ${items[1].price}`);
        expect(cartItem2).toBeInDocument();
    })
})