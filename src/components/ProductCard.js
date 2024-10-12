import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Image = styled.img`
  max-height: 150px;
  object-fit: contain;
  margin-bottom: 15px;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 10px;
  flex-grow: 1;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
    }));
  };

  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>${product.price.toFixed(2)}</Price>
      <Button onClick={handleAdd}>Agregar al Carrito</Button>
    </Card>
  );
};

export default ProductCard;
