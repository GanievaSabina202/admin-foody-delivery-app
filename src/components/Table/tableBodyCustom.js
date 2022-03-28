import { TableBody, TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { delModal } from '../../store/slices/drawer/drawerSlices';
import { DeleteModal } from '../Modal/Modal';
import { Bin } from '../Modal/Modal.styled';
import { Tooltip } from '@mantine/core';

export const CategoryTableBody = ({ rows }) => {
    const dispatch = useDispatch()
    const cloudRef = 'category'
    const [delData, setDeledata] = useState({})

    const collector = (id, imgUrl) => {
        dispatch(delModal())
        setDeledata({ id, imgUrl, cloudRef })
    }

    return (

        <TableBody>
            <DeleteModal dataForDelete={delData} />
            {rows
                ?.map(({ uniqueId, name, imgUrl, slug, uid }) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={uniqueId}>
                            <TableCell key={uniqueId}>
                                {uniqueId}
                            </TableCell>
                            <TableCell key={imgUrl}>
                                <img src={imgUrl} style={{ 'objectFit': 'cover' }} alt="" width="45" height="45" />
                            </TableCell>
                            <TableCell key={name}>
                                {name}
                            </TableCell>
                            <TableCell key={slug}>
                                {slug}
                            </TableCell>
                            <TableCell key={uid}>
                                <Bin onClick={() => collector(uid, imgUrl)} />
                            </TableCell>
                        </TableRow>
                    );
                })}
        </TableBody>
    )
}


export const OrdersTableBody = ({ rows }) => {

    const dispatch = useDispatch()
    const [delData, setDeledata] = useState({})
    const cloudRef = 'orders'


    const collector = (id, imgUrl) => {
        dispatch(delModal())
        setDeledata({ id, imgUrl, cloudRef })
    }



    return (
        <TableBody>
            <DeleteModal dataForDelete={delData} />
            {rows
                ?.map(({ id, customerId, time, deliveryAddress, amount, paymentMethod, contact, uid }) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={id}>
                            <TableCell key={id}>
                                {id}
                            </TableCell>
                            <TableCell key={customerId}>
                                {customerId}
                            </TableCell>
                            <TableCell key={id + 1}>
                                {time}
                            </TableCell>
                            <TableCell key={id + 2}>
                                {deliveryAddress}
                            </TableCell>
                            <TableCell key={id + 3}>
                                {amount}
                            </TableCell>
                            <TableCell key={id + 4}>
                                {paymentMethod}
                            </TableCell>
                            <TableCell key={contact}>
                                {contact}
                            </TableCell>
                            <TableCell key={uid}>
                                <Bin onClick={() => collector(uid, null)} />
                            </TableCell>
                        </TableRow>
                    );
                })}
        </TableBody>
    )
}


export const OffersTableBody = ({ rows }) => {

    const dispatch = useDispatch()
    const [delData, setDeledata] = useState({})
    const cloudRef = 'offers'
    const [opened, setOpened] = useState(false);


    const collector = (id, imgUrl) => {
        dispatch(delModal())
        setDeledata({ id, imgUrl, cloudRef })
    }



    return (
        <TableBody>
            <DeleteModal dataForDelete={delData} />
            {rows
                ?.map(({ id, imgUrl, title, description, uid }) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={uid}>
                            <TableCell key={id}>
                                {id}
                            </TableCell>
                            <TableCell key={id + 1}>
                                <img src={imgUrl} style={{ 'objectFit': 'cover' }} width='45' height='45' alt="" />
                            </TableCell>
                            <TableCell key={id + 2}>
                                {title}
                            </TableCell>
                            <TableCell key={id + 3}>
                                <Tooltip label={description} opened={opened}>
                                    <p style={{ "whiteSpace": "nowrap", 'overflow': 'hidden', 'textOverflow': 'ellipsis', 'maxWidth': '90px', 'cursor': "pointer" }} onClick={() => setOpened((o) => !o)}>
                                        {description}
                                    </p>
                                </Tooltip>
                            </TableCell>
                            <TableCell key={id + 5}>
                                <Bin onClick={() => collector(uid, imgUrl)} />
                            </TableCell>
                        </TableRow>
                    );
                })}
        </TableBody>
    )

}