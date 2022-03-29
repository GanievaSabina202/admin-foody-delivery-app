import React, { useState } from 'react';
import * as Styled from './ProductCard.styled'
// import { useDispatch } from 'react-redux';
// import { removeProduct } from '../../../store/slices/product/productSlice';
// import { RemoveProductItem } from '../../../services/product';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components"
import { DeleteModal } from '../../../components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { delModal } from '../../../store/slices/drawer/drawerSlices';

export const ProductCard = ({ ProductSelector }) => {
    const cloudRef = 'products'
    const dispatch = useDispatch()
    const [delData, setDeledata] = useState({})

    const collector = (id, imgUrl) => {
        console.log(id)
        dispatch(delModal())
        setDeledata({ id, imgUrl, cloudRef })
    }

    return (
        <>
            <ToastContainer />
            <DivStyledProduct>
                <Styled.StackWrap>
                    {
                        ProductSelector.map(({ name, productId, uid, belongRestaurant, imgUrl, price }) => (
                            <Styled.CardWrapper key={productId}>
                                {
                                    !imgUrl.length < 1 ? <Styled.ImgWrapper src={imgUrl[0]} /> : <Styled.ImgWrapper src={'https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg'} />
                                }
                                <DeleteModal dataForDelete={delData} />
                                <Styled.ContentWrapper>
                                    <Styled.Title>
                                        {name}
                                    </Styled.Title>
                                    <Styled.SubTitle>
                                        {belongRestaurant}
                                    </Styled.SubTitle>
                                </Styled.ContentWrapper>

                                <Styled.ContentAction>
                                    <Styled.Price>
                                        ${price}
                                    </Styled.Price>
                                    <Styled.Bin onClick={() => collector(uid, imgUrl)} />
                                </Styled.ContentAction>
                            </Styled.CardWrapper>
                        ))
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
