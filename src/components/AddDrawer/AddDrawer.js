
import { useDispatch } from 'react-redux';
import { addDrawer } from '../../store/slices/drawer/drawerSlices';
import { useSelector } from 'react-redux';
import { AddDrawerStyled } from './AddDrawer.Styled';
import { CustomDropzone } from '../Dropzone/DropzoneInput'

export const AddDrawer = ({ children }) => {
    const dispatch = useDispatch();
    const { addDrawerStatus } = useSelector(props => props.drawer);

    return (
        <>
            <AddDrawerStyled
                transitionDuration={500}
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
                {<CustomDropzone /> ? <CustomDropzone /> : ''}
                <h1>xeyya,</h1>
            </AddDrawerStyled>
        </>
    );
}


