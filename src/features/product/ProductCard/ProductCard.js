import React from 'react';
import * as Styled from './ProductCard.styled'
// import { useDispatch } from 'react-redux';
// import { removeProduct } from '../../../store/slices/product/productSlice';
// import { RemoveProductItem } from '../../../services/product';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components"

export const ProductCard = ({ ProductSelector }) => {

    return (
        <>
            <ToastContainer />
            <DivStyledProduct>
                <Styled.StackWrap>
                    {
                        ProductSelector.map(e => Object.values(e).map(item => (

                            <Styled.CardWrapper key={item.productId}>
                                {
                                    item.imgUrl[0] ? <Styled.ImgWrapper src={item?.imgUrl[0]} /> : <Styled.ImgWrapper src={'https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg'} />
                                }

                                <Styled.ContentWrapper>
                                    <Styled.Title>
                                        {item.name}
                                    </Styled.Title>
                                    <Styled.SubTitle>
                                        {item.belongRes}
                                    </Styled.SubTitle>
                                </Styled.ContentWrapper>

                                <Styled.ContentAction>
                                    <Styled.Price>
                                        ${item.price}
                                    </Styled.Price>
                                    {/* <Delete handler={() => handler(i.id)} ModalTitle={ModalTitle} ModalDesc={ModalDesc} /> */}
                                </Styled.ContentAction>
                            </Styled.CardWrapper>
                        )))
                    }

                </Styled.StackWrap>
            </DivStyledProduct>
        </>
    );
};

const DivStyledProduct = styled.div`
    margin-top:2.5rem;
    width:100%;
`
