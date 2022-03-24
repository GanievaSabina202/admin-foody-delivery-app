import React, { useState } from 'react'
import { Group, Text } from '@mantine/core';
import { IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { storage } from '../../config/firebase-config'
import upsvg from './uplad.svg'
import { CustomDropzoneStyled } from './Dropzone.Styled';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useDispatch } from 'react-redux';
import { setImageUrl } from '../../store/slices/form/formSlice';

export const CustomDropzone = () => {
    const [droppedData, setDroppedData] = useState();
    const dispatch = useDispatch();

    const uploadImg = (files) => {
        if (files) {
            setDroppedData((files[0]))


            const storageRef = ref(storage, `/restuarants/${files[0]?.path}`);
            const uploadImg = uploadBytesResumable(storageRef, files[0]);

            uploadImg.on("state_changed", (snapshot) => {
                const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },
                (error) => console.log(error),
                () => {
                    getDownloadURL(uploadImg.snapshot.ref).then((url) => {
                        dispatch(setImageUrl(url))
                    }
                    )
                })
        }


    }

    return (

        <CustomDropzoneStyled
            onDrop={(files) => {
                uploadImg((files))
            }}
            onReject={(files) => files}
            maxSize={3 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            classNames={{
                root: 'Dropzone-root-class',
                loading: 'Dropzone-loading-class',
                active: 'Dropzone-active-class',
                reject: 'Dropzone-reject-class',
            }}
            data={droppedData ? URL.createObjectURL(droppedData) : ""}


        >
            {(status) => (
                <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>

                    {
                        !droppedData && <div>
                            <img src={upsvg} alt="" />
                            <Text>Upload</Text>
                        </div>
                    }

                </Group>
            )}
        </CustomDropzoneStyled>
    );
}



