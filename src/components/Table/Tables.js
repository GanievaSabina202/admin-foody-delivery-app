import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Table, TableCell, Paper, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { categorySchema, offerSchema, ordersSchema } from './rowshema';
import { CategoryTableBody, OffersTableBody, OrdersTableBody } from './tableBodyCustom';

export const Tables = ({ rows, orderPage }) => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rowHead, setRowHead] = React.useState([])


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const switching = () => {
        switch (orderPage) {
            case 'category':
                return setRowHead(categorySchema)


            case 'orders':
                return setRowHead(ordersSchema)


            case 'offers':
                return setRowHead(offerSchema)
            default: <></>

        }
    }

    useEffect(() => {
        switching();
    })

    return (
        <>
            {rows &&
                <>
                    <ToastContainer />
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }} >
                            <Table stickyHeader aria-label="sticky table" style={{ width: '100%' }}>
                                <TableHead>
                                    <TableRow>
                                        {
                                            rowHead.map((i, index) => (
                                                <TableCell key={index}>{i}</TableCell>
                                            ))
                                        }
                                    </TableRow>
                                </TableHead>
                                {orderPage === 'category' && <CategoryTableBody rows={rows} />}
                                {orderPage === 'orders' && <OrdersTableBody rows={rows} />}
                                {orderPage === 'offers' && <OffersTableBody rows={rows} />}
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </>
            }
        </>
    );
}; 