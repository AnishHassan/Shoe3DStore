import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/store";

const ProductContainer = styled.div`
position : absolute;
margin-left : 6rem;
margin-top : 10rem; 
@media(max-width:1000px){
  margin-top:16rem;
}
@media(max-width:576px){
  width: 100%;
    margin-left: 35px;
    margin-top:11rem;
   
}
@media(max-width:425px){
  margin-left:-26px;
}
@media(max-width:370px){
  margin-left:-43px;
}
`

const ProductName = styled.div`
  font-family: 'Broadway Italic', sans-serif;
  font-size: 68px;
  font-weight: bold;
  color: #FFFFFF;
  text-shadow: 0px 0px 10px #FFFFFF;
  @media(max-width:931px){
    font-size:50px;
  }
  @media(max-width:576px){
    font-size:40px;
    margin-left: 11rem;
  }
  @media(max-width:425px){
    font-size:30px;
    
  }
  
`

const ProductColorName = styled.div`
font-family: Arial, sans-serif;
  font-size: 28px;
  font-weight: bold;
  color: #FFFFFF;
  margin-top: 5px;
  margin-left: 8rem;
   @media(max-width:931px){
    margin-left:0rem
  }
   @media(max-width:576px){
   
    margin-left: 11rem;
  }
`

const ProductDesc = () => {

    const selectedColor = useSelector((state: RootState) => state.app.selectedColor);
    const selectedProduct = useSelector((state: RootState) => state.app.selectedProduct);

    console.log(selectedColor, '<<< color desc')
    console.log(selectedProduct, '<<< color product')
    return (
        <ProductContainer>
            <ProductName>
                {selectedProduct.name}
            </ProductName>
            <ProductColorName>
                {selectedColor.name}
            </ProductColorName>

        </ProductContainer>
    )
}

export default ProductDesc;