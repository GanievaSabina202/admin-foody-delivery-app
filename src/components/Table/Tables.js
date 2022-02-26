import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Table, TableBody, TableCell, Paper, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { Delete } from '../Delete/Delete';

export const Tables = ({ rows, handler, ModalDesc, ModalTitle }) => {

    const [columns, setColumns] = React.useState([]);
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
        rows.length && setColumns(Object.keys((rows[0])).map((key) => {
            return {
                id: key,
                label: key,
                align: 'center',
                minWidth: 130,
            }
        }))
    }, [rows])

    return (
        <>
            {rows &&
                <>
                    <ToastContainer />
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns?.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                            >
                                                {column.label}
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
                                                    {columns?.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {column.id === 'url'
                                                                    ? <img width="45" height="45" cover src={value} />
                                                                    : value.length > 30 ? `${value.slice(0, 30)}...` : value}
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