import React, { useState } from 'react'
import { TextInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../../../../config/firebase-config';
import { useDispatch, useSelector } from 'react-redux';
import { addDrawer } from '../../../../store/slices/drawer/drawerSlices';
import { removeImgUrl } from '../../../../store/slices/form/formSlice';
import { LoadingOverlay } from '@mantine/core';
import { Boox, FormStyled } from '../inputs/inputs.styled';



const CategoryInputsGroup = () => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const categoryCollectionRef = collection(db, "category");
    const { imgUrl } = useSelector(props => props.img);


    const form = useForm({
        initialValues: {
            name: '',
            slug: '',
            uniqueId: Date.now()
        },

        validate: {
            name: (value) => (value?.length < 2 ? 'Name must have at least 2 letters' : null),
            slug: (value) => (value?.length < 2 ? 'Slug must have at least 1 letters' : null),
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
                    label="Name"
                    placeholder="Category name"
                    {...form.getInputProps('name')}
                />
                <TextInput
                    required
                    label="Slug"
                    className='slug-inp'
                    placeholder="#slug"
                    {...form.getInputProps('slug')}
                />
                <Group mt="md" className="button-group">
                    <Button onClick={() => dispatch(addDrawer())}>Cancel</Button>
                    <Button type="submit">Create category</Button>
                </Group>
            </FormStyled>
        </Boox>
    );
}

export default CategoryInputsGroup
