import React, { useState } from 'react'
import { Group, Text } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import styled from 'styled-components';


export const CustomDropzone = () => {

    const [droppedData, setDroppedData] = useState();

    const uploadImg = (imgData) => {
        if (imgData) {
            setDroppedData((imgData[0]))
        }
    }

    return (

        <CustomDropzoneStyled
            onDrop={(files) => {
                // console.log('accepted files', files)
                uploadImg((files))
            }}
            onReject={(files) => console.log('rejected files', files)}
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
                    <div>
                        <Text size="xl" inline>
                            Drag images here or click to select files
                        </Text>
                        <Text size="sm" color="dimmed" inline mt={7}>
                            Attach as many files as you like, each file should not exceed 5mb
                        </Text>
                    </div>
                </Group>
            )}
        </CustomDropzoneStyled>
    );
}


const CustomDropzoneStyled = styled(Dropzone)`
    background:${({ data }) => `url(${data.replace('blob:', '')})`};
    /* background:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqFOnmObxC_NvvJVdkU_zlYo9EUgK0sx_AEAt4cQC5A-pSvHv4VDsGYzeDR9OXKXduAi0&usqp=CAU) */
`

