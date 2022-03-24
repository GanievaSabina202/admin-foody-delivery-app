import { useDispatch } from 'react-redux';
import { addDrawer } from '../../store/slices/drawer/drawerSlices';
import { useSelector } from 'react-redux';
import { AddDrawerStyled } from './AddDrawer.Styled';
import { CustomDropzone } from '../Dropzone/DropzoneInput'
import CustomInputGroup from './components/inputs';
import { removeImgUrl } from '../../store/slices/form/formSlice';

export const AddDrawer = ({ children }) => {
    const dispatch = useDispatch();
    const { addDrawerStatus } = useSelector(props => props.drawer);
    const closing = () => {
        dispatch(addDrawer())
        dispatch(removeImgUrl())
    }
    return (
        <>

            <AddDrawerStyled
                transitionDuration={500}
                position="right"
                opened={addDrawerStatus}
                onClose={() => closing()}
                title="Add restaurant"
                padding="xl"
                size={948}
                classNames={{
                    root: 'drawer-root-class',
                    overlay: 'drawer-overlay-class',
                    drawer: 'drawer-drawer-class',
                    header: 'drawer-header-class',
                    title: 'drawer-title-class',
                    closeButton: 'drawer-closeButton-class',
                }}
            >

                <div className='drop-zone-box'>
                    <p>Upload your restaurants image</p>
                    <CustomDropzone />
                </div>

                <div className="form-box">
                    <p>
                        Add your Restuarants information
                    </p>
                    <CustomInputGroup />
                </div>
            </AddDrawerStyled>
        </>
    );
}


