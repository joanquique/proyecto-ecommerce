// src/pages/Home.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';
import ProductCard from '../components/ProductCard';

const HomeContainer = styled.div`
  padding: 20px;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 50px;
`;

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <Message>Cargando productos...</Message>;
  if (error) return <Message>Error al cargar productos: {error}</Message>;

  return (
    <HomeContainer>
      <h1>Nuestros Productos</h1>
      <ProductsGrid>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </HomeContainer>
  );
};

export default Home;
