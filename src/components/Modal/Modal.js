import React from 'react';
import Modal from '@mui/material/Modal';
import * as Styled from './Modal.styled';

export const Modals = ({ handler, ModalTitle, ModalDesc }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Styled.Bin onClick={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Styled.BoxCustom>
                    <Styled.ContentWrap>
                        <Styled.ModalTitle>
                            {ModalTitle}
                        </Styled.ModalTitle>
                        <Styled.ModalDesc>
                            {ModalDesc}
                        </Styled.ModalDesc>
                    </Styled.ContentWrap>
                    <Styled.ButtonWrapper>
                        <Styled.ButtonCancel onClick={handleClose}>cancel</Styled.ButtonCancel>
                        <Styled.ButtonDelete onClick={handler}>delete</Styled.ButtonDelete>
                    </Styled.ButtonWrapper>
                </Styled.BoxCustom>
            </Modal>
        </div>
    );
};

