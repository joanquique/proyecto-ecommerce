import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from '../components/Header/Header'; 
import rootReducer from '../redux/store'; 

// Crea un store mock para las pruebas
const renderWithRedux = (component, { initialState, store = createStore(rootReducer, initialState) } = {}) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('Header Component', () => {
  test('renders Header with links', () => {
    renderWithRedux(<Header />); // Renderiza el componente Header

    // Verifica que los links se renderizan
    expect(screen.getByText(/Inicio/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.getByText(/Registro/i)).toBeInTheDocument();
  });

  test('shows logout icon when user is authenticated', () => {
    const initialState = { user: { isAuthenticated: true } };
    renderWithRedux(<Header />, { initialState });

    // Verifica que el icono de logout se renderiza
    expect(screen.getByRole('button', { name: /cerrar sesión/i })).toBeInTheDocument();
  });

  test('calls handleLogout when logout icon is clicked', () => {
    const initialState = { user: { isAuthenticated: true } };
    const { store } = renderWithRedux(<Header />, { initialState });

    // Simula el clic en el icono de logout
    fireEvent.click(screen.getByRole('button', { name: /cerrar sesión/i }));

    // Verifica que la acción de logout haya sido despachada
    const actions = store.getActions();
    expect(actions).toContainEqual({ type: 'user/logout' }); // Cambia 'user/logout' por la acción de logout correcta en tu slice
  });

});
