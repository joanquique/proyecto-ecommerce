import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import {
  Card,
  ImageContainer,
  Image,
  Title,
  Price,
  Button,
  Notification
} from './ProductCard.styled';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

const ProductCard = React.memo(({ product }) => {
  const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleAdd = () => {
    dispatch(addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
    }));
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <Card>
      <ImageContainer>
        <Image 
          src={product.image} 
          alt={product.title} 
          onLoad={() => setLoaded(true)} 
          loaded={loaded} 
          loading="lazy" 
        />
      </ImageContainer>
      <Title>{product.title}</Title>
      <Price>${product.price.toFixed(2)}</Price>
      <Button onClick={handleAdd}>Agregar al Carrito</Button>
      {showNotification && (
        <Notification>
          <FaCheckCircle /> ¡Añadido!
        </Notification>
      )}
    </Card>
  );
});

export default ProductCard;
