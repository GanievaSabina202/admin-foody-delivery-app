import React from 'react';
import * as Styled from './ProductCard.styled'
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../../store/slices/product/productSlice';
import { RemoveProductItem } from '../../../services/product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modals from '../../../components/Modal/index'
export const ProductCard = ({ ProductSelector }) => {

    const dispatch = useDispatch();

    const handler = async (id) => {
        RemoveProductItem()
        dispatch(removeProduct(id))
        toast("Wow so easy!")
    }
    return (
        <>

            <ToastContainer />
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
                            <Modals handler={() => handler(i.id)}/>
                        </Styled.ContentAction>
                    </Styled.CardWrapper>
                ))}
            </Styled.StackWrap>
        </>
    );
};

