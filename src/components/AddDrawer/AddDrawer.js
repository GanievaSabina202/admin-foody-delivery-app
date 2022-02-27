// import { useState } from 'react';
import { Drawer, Input } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { addDrawer } from '../../store/slices/drawer/drawerSlices';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const AddDrawer = () => {
    // const [opened, setOpened] = useState(false);
    const dispatch = useDispatch();
    const { addDrawerStatus } = useSelector(props => props.drawer);

    return (
        <>
            <AddDrawerStyled
                position="right"
                opened={addDrawerStatus}
                onClose={() => dispatch(addDrawer())}
                title="Add Product"
                padding="xl"
                size="xl"
                classNames={{
                    root: 'drawer-root-class',
                    overlay: 'drawer-overlay-class',
                    drawer: 'drawer-drawer-class',
                    header: 'drawer-header-class',
                    title: 'drawer-title-class',
                    closeButton: 'drawer-closeButton-class',
                }}
            >
                {/* <DropzoneImg /> */}
                <Input variant="default" placeholder="Default variant" />
                <h1>Dwideer</h1>
                <h1>Dwideer</h1>
                <h1>Dwideer</h1>
                <h1>Dwideer</h1>
                <h1>Dwideer</h1>
            </AddDrawerStyled>
        </>
    );
}


const AddDrawerStyled = styled(Drawer)`
    
.drawer-closeButton-class{
    color:#fff;
    background-color: #ffffff30;
}
.drawer-drawer-class{
    background-color:${({ theme }) => theme.colors.darkBlue_2};
    color:${({ theme }) => theme.colors.grayText}
}
`