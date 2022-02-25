import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Table, TableBody, TableCell, Paper, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { Delete } from '../Delete/Delete';
import { useSelector } from 'react-redux';

export const Tables = ({ handler, ModalDesc, ModalTitle }) => {

    // const [columns, setColumns] = React.useState([]);
    const rows = useSelector(state => state.offers.offers)
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    useEffect(() => {
        // rows.length && setColumns(Object.keys((rows[0])).map((key) => {
        //     return {
        //         id: key,
        //         label: key,
        //         align: 'center',
        //         minWidth: 130,
        //     }
        // }))
        // console.log(rows);
    }, [rows])

    return (

        <>
            {rows && <>
                <ToastContainer />
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {rows?.map((item) => (
                                        <TableCell
                                            key={item.id}
                                            align={'center'}
                                            style={{ minWidth: 130 }}
                                        >
                                            {item.id}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {rows
                                    ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    ?.map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                                {rows.map((item) => {
                                                    // let value = [item.url]
                                                    return (
                                                        <TableCell key={item.id} align={'center'}>
                                                            <img src={item.url} cover width="45" height="45" alt="" />
                                                            {/* {item.filter(rows.id === 'url')
                                                                ? <img width="45" height="45" cover src={rows.url} />
                                                                : rows.url.length > 30 ? `${rows.url.slice(0, 30)}...` : rows.url} */}

                                                        </TableCell>
                                                    );
                                                })}
                                                <TableCell>
                                                    <Delete handler={() => handler(row.id)} ModalTitle={ModalTitle} ModalDesc={ModalDesc} />
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
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