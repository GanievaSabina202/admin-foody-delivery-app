import { useDispatch } from 'react-redux';
import { addDrawer } from '../../store/slices/drawer/drawerSlices';
import { useSelector } from 'react-redux';
import { AddDrawerStyled } from './AddDrawer.Styled';
import { CustomDropzone } from '../Dropzone/DropzoneInput'
import CustomInputGroup from './components/inputs';
import { removeImgUrl } from '../../store/slices/form/formSlice';
import CategoryInputsGroup from './components/category'
import OffersInputsGroup from './components/offers';
import ProductsInputsGroup from './components/products';

export const AddDrawer = ({ config: { name, title, inputType, } }) => {
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
                title={title}
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
                    <p>Upload your {name} image</p>

                    <CustomDropzone dbHref={name} />
                </div>

                <div className="form-box">
                    <p>
                        Add your {name} information
                    </p>
                    {inputType === 'restaurants' && <CustomInputGroup />}
                    {inputType === 'category' && <CategoryInputsGroup />}
                    {inputType === 'offers' && <OffersInputsGroup />}
                    {inputType === 'products' && <ProductsInputsGroup />}
                </div>
            </AddDrawerStyled>
        </>
    );
}


