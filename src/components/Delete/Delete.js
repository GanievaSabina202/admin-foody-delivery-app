import React from 'react';
import Modals from '../Modal';

export const Delete = ({handler,ModalTitle,ModalDesc}) => {
    return (
        <>
            <Modals
                handler={handler}
                ModalTitle={ModalTitle}
                ModalDesc={ModalDesc}
            />
        </>
    );
};

