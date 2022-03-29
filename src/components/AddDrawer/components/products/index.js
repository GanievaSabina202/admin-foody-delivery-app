import React, { useEffect, useState } from 'react'
import { TextInput, Button, Group, Textarea, NumberInput, NativeSelect } from '@mantine/core';
import { useForm } from '@mantine/form';
import { addDoc, collection, getDocs, query } from '@firebase/firestore';
import { db } from '../../../../config/firebase-config';
import { useDispatch, useSelector } from 'react-redux';
import { addDrawer } from '../../../../store/slices/drawer/drawerSlices';
import { removeImgUrl } from '../../../../store/slices/form/formSlice';
import { LoadingOverlay } from '@mantine/core';
import { Boox, FormStyled } from '../inputs/inputs.styled';


const ProductsInputsGroup = () => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const { imgUrl } = useSelector(props => props.img);
    const [res, setRes] = useState([])
    const productsCollectionRef = collection(db, "products");

    useEffect(() => {
        const categoryRef = query(collection(db, "restaurants"));
        const getCategory = async () => {
            const data = await getDocs(categoryRef)
            setRes(data.docs.map((doc) => (doc.data().name)))
        }
        getCategory();

    }, [])

    const form = useForm({
        initialValues: {
            name: '',
            price: '',
            belongRestaurant: '',
            description: '',
            productId: Date.now()
        },

        validate: {
            name: (value) => (value?.length < 2 ? 'Name must have at least 2 letters' : null),
            price: (value) => (value?.length < 0 ? 'Name must have at least 2 letters' : null),
            description: (value) => (value?.length < 6 ? 'Dscription must have at least 6 letters' : null),
        },
    });

    const createRes = async (catData) => {
        // setVisible(true)
        // const allDataWithImg = { ...catData, imgUrl }
        // const findQuery = query(collection(db, "restaurants"), where("name", "==", `${allDataWithImg.belongRes}`));
        // const querySnapshot = await getDocs(findQuery);
        // querySnapshot.forEach(async ({ id }) => {
        //     const sfRef = doc(db, "restaurants", id);
        //     await updateDoc(sfRef, {
        //         products: arrayUnion({ ...allDataWithImg })
        //     }, { merge: true });

        //     dispatch(removeImgUrl())
        //     dispatch(addDrawer());
        //     setVisible(false)
        // });

        setVisible(true)
        const allDataWithImg = { ...catData, imgUrl }
        await addDoc(productsCollectionRef, allDataWithImg)
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
                    placeholder="Name"
                    {...form.getInputProps('name')}
                />
                <Textarea
                    placeholder="Your comment"
                    label="Description"
                    minRows={4}
                    radius="lg"
                    {...form.getInputProps('description')}
                />
                <NumberInput
                    decimalSeparator=","
                    label="Price"
                    defaultValue={0.0}
                    precision={2}
                    step={0.5}
                    hideControls
                    {...form.getInputProps('price')}
                />
                <NativeSelect
                    data={res}
                    placeholder="Pick one"
                    label="Restaurants"
                    size="md"
                    className='nativeSelect-inp'
                    required
                    {...form.getInputProps('belongRestaurant')}
                />
                <Group mt="md" className="button-group">
                    <Button onClick={() => dispatch(addDrawer())}>Cancel</Button>
                    <Button type="submit">Create offer</Button>
                </Group>
            </FormStyled>
        </Boox>
    );
}

export default ProductsInputsGroup
