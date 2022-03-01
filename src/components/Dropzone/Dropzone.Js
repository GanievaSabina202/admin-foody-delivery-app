import React, { useState } from 'react'
import { Group, Text } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import styled from 'styled-components';


export const CustomDropzone = () => {


    const [droppedData, setDroppedData] = useState();


    return (

        <CustomDropzoneStyled
            onDrop={(files) => {
                console.log('accepted files', files)
                setDroppedData(files)
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
            data={droppedData}


        >
            {(status) => (
                <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
                    {/* <ImageUploadIcon
                            status={status}
                            style={{ width: 80, height: 80, color: getIconColor(status, theme) }}
                        /> */}

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
    background-image:(${({ data }) => data ? `url(${data[0].path})` : ''})
`
// ${(props) => `url(${props.imgUrl})`}