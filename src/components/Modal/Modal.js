import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { db, storage } from '../../config/firebase-config';
import { delModal } from '../../store/slices/drawer/drawerSlices';
import { ButtonCancel, ButtonDelete, ButtonWrapper, DesigModal, ModalDesc, ModalTitle } from './Modal.styled';
import { deleteDoc, doc } from '@firebase/firestore';
import { ref, deleteObject } from "firebase/storage";
import { useState } from 'react';
import { LoadingOverlay } from '@mantine/core';

export const DeleteModal = ({ dataForDelete }) => {
    const dispatch = useDispatch()
    const { delModalStatus } = useSelector(props => props.drawer);
    const [visible, setVisible] = useState(false);

    const removeRes = async ({ id, imgUrl, cloudRef }) => {
        setVisible(true)
        const imageName = imgUrl.match(/(?<=restaurants%2F).*(?=\?)/gm);
        const userDoc = doc(db, cloudRef, id)
        const desertRef = ref(storage, `${cloudRef}/${imageName}`);
        await deleteDoc(userDoc)
        await deleteObject(desertRef)
        setVisible(false)
        dispatch(delModal())
        toast("Wow so easy!")
    }


    return (
        <>
            <DesigModal
                opened={delModalStatus}
                onClose={() => dispatch(delModal())}
                overlayColor={'#000'}
                overlayOpacity={0.1}
                centered
            >
                <LoadingOverlay visible={visible} />

                <ModalTitle>Are you sure it’s deleted ? </ModalTitle>
                <ModalDesc>Attention! If you delete this PRODUCTS, it will not come back...</ModalDesc>
                <ButtonWrapper>
                    <ButtonCancel onClick={() => dispatch(delModal())}>Cancel</ButtonCancel>
                    <ButtonDelete onClick={() => removeRes(dataForDelete)}>Delete</ButtonDelete>
                </ButtonWrapper>

            </DesigModal>

        </>
    );
}
