import React, { useState } from 'react'
import { TextInput, NumberInput, Button, Group, MultiSelect, NativeSelect } from '@mantine/core';
import { useForm } from '@mantine/form';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../../../../config/firebase-config';
import { useDispatch, useSelector } from 'react-redux';
import { addDrawer } from '../../../../store/slices/drawer/drawerSlices';
import { Boox, FormStyled } from './inputs.styled';
import { removeImgUrl } from '../../../../store/slices/form/formSlice';
import { LoadingOverlay } from '@mantine/core';



const CustomInputGroup = () => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState(['Ice Cream', 'Street Food', 'Drink', 'National meal', 'Soup', 'Cake', 'Fast Food']);
    const restuarantsCollectionRef = collection(db, "restaurants");
    const { imgUrl } = useSelector(props => props.img);


    const form = useForm({
        initialValues: {
            name: '',
            price: '',
            cuisine: [],
            deliverMin: '',
            address: '',
            category: '',
            slug: '',
        },

        validate: {
            name: (value) => (value?.length < 2 ? 'Name must have at least 2 letters' : null),
            price: (value) => (/^\d*(\.\d+)?$/.test(value) ? null : 'Invalid price'),
            cuisine: (value) => (value?.length < 1 ? 'Cuisine must have at least one items' : null),
            deliverMin: (value) => (/^\d*(\.\d+)?$/.test(value) ? null : 'Invalid minutes'),
            address: (value) => (value?.length < 2 ? 'Name must have at least 2 letters' : null),
            slug: (value) => (value?.length < 1 ? 'Slug must have at least 1 letters' : null),
        },
    });


    const createRes = async (resData) => {
        setVisible(true)
        const allDataWithImg = { ...resData, imgUrl }
        await addDoc(restuarantsCollectionRef, allDataWithImg)
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
                    placeholder="Restaurant name"
                    {...form.getInputProps('name')}
                />
                <MultiSelect
                    label="Cuisine"
                    data={data}
                    placeholder="Select items"
                    searchable
                    required
                    creatable
                    getCreateLabel={(query) => `+ Create ${query}`}
                    onCreate={(query) => setData((current) => [...current, query])}
                    {...form.getInputProps('cuisine')}
                />
                <NumberInput
                    placeholder="Delivery price"
                    className="deli-inp"
                    label="Delivery Price $"
                    hideControls
                    required
                    {...form.getInputProps('price')}
                />
                <NumberInput
                    hideControls
                    placeholder="Delivery Min"
                    className="deli-min"
                    label="Delivery Min"
                    required
                    {...form.getInputProps('deliverMin')}
                />
                <TextInput
                    required
                    label="Address"
                    placeholder="Address"
                    className='address-inp'
                    {...form.getInputProps('address')}
                />
                <NativeSelect
                    data={['Fast Food', 'Pizza', 'Steak', 'National', 'Coffee']}
                    placeholder="Pick one"
                    label="Category"
                    size="md"
                    className='nativeSelect-inp'
                    required
                    {...form.getInputProps('category')}
                />
                <TextInput
                    required
                    label="Slug"
                    className='slug-inp'
                    placeholder="#slug"
                    {...form.getInputProps('slug')}
                />
                <Group mt="md" className="button-group">
                    <Button onClick={() => dispatch(addDrawer())}>Cansel</Button>
                    <Button type="submit">Create Restaurant</Button>
                </Group>
            </FormStyled>
        </Boox>
    );
}

export default CustomInputGroup
