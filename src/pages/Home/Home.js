import React, { useEffect, useState } from 'react';
import {
  HomeContainer,
  Title,
  Filters,
  Select,
  SearchInput,
  ProductsGrid,
  Message
} from './Home.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/slices/productSlice';
import { fetchCategories } from '../../redux/slices/categorySlice';
import ProductCard from '../../components/ProductCard/ProductCard';
import Banner from '../../components/Banner/Banner';
import Spinner from '../../components/Spinner/Spinner';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);
  const { categories, loading: categoriesLoading, error: categoriesError } = useSelector(state => state.categories);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryChange = async (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    if (category === '') {
      dispatch(fetchProducts());
    } else {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        dispatch({ type: 'products/fetchProducts/fulfilled', payload: response.data });
      } catch (error) {
        dispatch({ type: 'products/fetchProducts/rejected', error: { message: error.message } });
      }
    }
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading || categoriesLoading) return <Spinner />;
  if (error) return <Message>Error al cargar productos: {error}</Message>;
  if (categoriesError) return <Message>Error al cargar categorías: {categoriesError}</Message>;

  return (
    <HomeContainer>
      <Banner />
      <Title>Nuestros Productos</Title>
      <Filters>
        <Select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Todas las Categorías</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </Select>
        <SearchInput 
          type="text" 
          placeholder="Buscar productos..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </Filters>
      {filteredProducts.length === 0 ? (
        <Message>No se encontraron productos.</Message>
      ) : (
        <ProductsGrid>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      )}
    </HomeContainer>
  );
};

export default Home;
