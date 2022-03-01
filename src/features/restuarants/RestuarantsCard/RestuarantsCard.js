import { Text, useMantineTheme } from "@mantine/core";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
// import styled from "styled-components";
import { Delete } from "../../../components/Delete/Delete";
import { RemoveProductItem } from "../../../services/product";
import { removeProduct } from "../../../store/slices/product/productSlice";
import { ImageStyled, RestaurantsCardContent, StyledGroup, StyledRestuarantsCards, StyledText } from "./RestuarantsCard.Styled";

export const RestaurantsCard = ({ apisProp }) => {

    const ModalTitle = "Are you sure it’s deleted"
    const ModalDesc = " Attention! If you delete this PRODUCTS, it will not come back...";

    const dispatch = useDispatch()
    const theme = useMantineTheme();
    const handler = async (id) => {
        RemoveProductItem()
        dispatch(removeProduct(id))
        toast("Wow so easy!")

    }

    return (
        <div>
            <ToastContainer />
            <RestaurantsCardContent >
                {
                    apisProp && apisProp.map((items) => (
                        <StyledRestuarantsCards shadow="sm" padding="lg" key={items.id} >
                            <Delete handler={() => handler(items.id)} ModalTitle={ModalTitle} ModalDesc={ModalDesc} />
                            <div>
                                <ImageStyled src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/1200px-Burger_King_logo_%281999%29.svg.png'} alt="Norway" />
                            </div>

                            <StyledGroup position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm, flexDirection: 'column' }}>
                                <StyledText weight={500}>Burger {items.id}</StyledText>
                                <Text size="sm" >
                                    MC Donalds
                                </Text>
                            </StyledGroup>
                        </StyledRestuarantsCards>
                    ))

                }

            </RestaurantsCardContent>
        </div >
    );
}

