import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setSelectedProduct } from '../store/appSlice';


// Define the data structure for product information
export interface Product {
    id: number;
    name: string;
    imageUrl: string;
    modelUrl?: string;
    price?: number;
}

// Define the props for the component
interface Props {
    products: Product[];
}

// Define the styled components for the product buttons
const ProductButton = styled.img<{ isActive: boolean }>`
  width: 120px;
  height: 120px;
  opacity: ${(props) => (props.isActive ? 0.9 : 0.4)};
  transition: opacity 0.3s ease-in;
  cursor : pointer;
  @media (max-width: 1440px) {
  width: 95px;
  height: 95px;

  }
`;

const ProductPrice = styled.h4<{ isActive: boolean }>`
  opacity: ${(props) => (props.isActive ? 0.9 : 0)};
  transition: opacity 0.3s ease-in;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-top : 4px;
  color : #fff;
   @media (max-width: 1440px) {
  font-size: 14px;
  }
`;




const ProductView: React.FC<Props> = ({ products }) => {

    const [selectedProduct, setSelectedProduct1] = useState<Product | null>(null);
    const dispatch = useDispatch();
    const handleProductSelect = (product: Product) => {
        setSelectedProduct1(product);
        dispatch(setSelectedProduct(product));
    };


    return (
        <>
            <div className='products-pane'>
                {products.map((product) => (
                    <div className='product-set'>
                        <ProductButton
                            src={product.imageUrl}
                            key={product.id}
                            isActive={selectedProduct?.id === product.id || false}
                            onClick={() => handleProductSelect(product)}
                        />
                        <ProductPrice isActive={selectedProduct?.id === product.id || false}>
                            ${product?.price}.00
                        </ProductPrice>
                    </div>
                ))}
            </div>

        </>
    );
};

export default ProductView;

