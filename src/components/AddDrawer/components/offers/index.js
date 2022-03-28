import React, { useState } from 'react'
import { TextInput, Button, Group, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../../../../config/firebase-config';
import { useDispatch, useSelector } from 'react-redux';
import { addDrawer } from '../../../../store/slices/drawer/drawerSlices';
import { removeImgUrl } from '../../../../store/slices/form/formSlice';
import { LoadingOverlay } from '@mantine/core';
import { Boox, FormStyled } from '../inputs/inputs.styled';



const OffersInputsGroup = () => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const categoryCollectionRef = collection(db, "offers");
    const { imgUrl } = useSelector(props => props.img);


    const form = useForm({
        initialValues: {
            title: '',
            description: '',
            id: Date.now()
        },

        validate: {
            title: (value) => (value?.length < 3 ? 'Name must have at least 3 letters' : null),
            description: (value) => (value?.length < 6 ? 'Dscription must have at least 6 letters' : null),
        },
    });


    const createRes = async (catData) => {
        setVisible(true)
        const allDataWithImg = { ...catData, imgUrl }
        await addDoc(categoryCollectionRef, allDataWithImg)
        dispatch(addDrawer());
        dispatch(removeImgUrl())
        setVisible(false)
    }

    return (
        <Boox>
            <LoadingOverlay visible={visible} style={{ height: 1200 }} />
            <FormStyled onSubmit={form.onSubmit((values) => createRes(values))}>
                <TextInput
                    required
                    label="Title"
                    placeholder="Title"
                    {...form.getInputProps('title')}
                />
                <Textarea
                    placeholder="Your comment"
                    label="Description"
                    minRows={2}
                    maxRows={4}
                    radius="lg"
                    {...form.getInputProps('description')}
                />
                <Group mt="md" className="button-group">
                    <Button onClick={() => dispatch(addDrawer())}>Cancel</Button>
                    <Button type="submit">Create offer</Button>
                </Group>
            </FormStyled>
        </Boox>
    );
}

export default OffersInputsGroup
