import React from 'react';
import * as Styled from './ProductCard.styled'
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../../store/slices/product/productSlice';
import { RemoveProductItem } from '../../../services/product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Delete } from '../../../components/Delete/Delete';
import styled from "styled-components"

export const ProductCard = ({ ProductSelector }) => {
    const dispatch = useDispatch();
    const ModalTitle = "Are you sure it’s deleted"
    const ModalDesc = " Attention! If you delete this PRODUCTS, it will not come back..."
    const handler = async (id) => {
        RemoveProductItem()
        dispatch(removeProduct(id))
        toast("Wow so easy!")

    }
    return (
        <>
            <ToastContainer />
            <DivStyledProduct>
                <Styled.StackWrap>
                    {ProductSelector.map((i) => (
                        <Styled.CardWrapper key={i.id}>
                            <Styled.ImgWrapper
                                src='https://www.cornerpizza.com.tr/Pizzalar/Margarita-Pizza-konyadaki-pizzacilar_cNxdoxg2h.jpg'
                            />
                            <Styled.ContentWrapper>
                                <Styled.Title>a
                                    {i.id}
                                </Styled.Title>
                                <Styled.SubTitle>
                                    Papa John’s
                                </Styled.SubTitle>
                            </Styled.ContentWrapper>

                            <Styled.ContentAction>
                                <Styled.Price>
                                    $16
                                </Styled.Price>
                                <Delete handler={() => handler(i.id)} ModalTitle={ModalTitle} ModalDesc={ModalDesc} />
                            </Styled.ContentAction>
                        </Styled.CardWrapper>
                    ))}
                </Styled.StackWrap>
            </DivStyledProduct>
        </>
    );
};

const DivStyledProduct = styled.div`
    margin-top:2.5rem;
    width:100%;
`