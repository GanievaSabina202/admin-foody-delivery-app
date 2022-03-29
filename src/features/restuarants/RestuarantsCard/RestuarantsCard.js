import { Group, Text, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from 'react-toastify';
import { DeleteModal } from "../../../components/Modal/Modal";
import { Bin } from "../../../components/Modal/Modal.styled";
import { delModal } from "../../../store/slices/drawer/drawerSlices";
import { ImageStyled, RestaurantsCardContent, StyledGroup, StyledRestuarantsCards, StyledText } from "./RestuarantsCard.Styled";


export const RestaurantsCard = ({ apisProp }) => {

    const dispatch = useDispatch()
    const theme = useMantineTheme();
    const cloudRef = 'restaurants'
    const [delData, setDeledata] = useState({})

    const collector = (id, imgUrl) => {
        console.log(id)
        dispatch(delModal())
        setDeledata({ id, imgUrl, cloudRef })
    }

    return (
        <div>
            <ToastContainer />
            <RestaurantsCardContent >
                {
                    apisProp && apisProp.map(({ id, imgUrl, name, category }) => (
                        <StyledRestuarantsCards shadow="sm" padding="lg" key={id} >
                            <DeleteModal dataForDelete={delData} />
                            <div>
                                <ImageStyled src={imgUrl} alt="Norway" />
                            </div>

                            <StyledGroup position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm, flexDirection: 'column' }}>
                                <StyledText weight={500}>{name}</StyledText>
                                <Text size="sm">
                                    {category}
                                </Text>
                            </StyledGroup>
                            <Group position="center">
                                <Bin onClick={() => collector(id, imgUrl)} />
                            </Group>
                        </StyledRestuarantsCards>
                    ))

                }
            </RestaurantsCardContent>
        </div >
    );
}

