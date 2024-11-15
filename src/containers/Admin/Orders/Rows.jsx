import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ProductsImg, SelectStyle } from './style';

import status from './OrderStatus'

import { api } from '../../../services/api'




function Rows({ row, setOrders, orders }) {
    const [open, setOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false)

    async function setNewStatus(id, status) {
        setIsLoading(true)
        try {
            await api.put(`order/${id}`, { status })

            // fazendo atualização dinamica dentro do State orders que está no rows
            // para fazer atualização da dom sempre que mudar
            const newOrders = orders.map(ord => {
                return ord._id === id ? { ...ord, status } : ord
            })
            setOrders(newOrders)
        } catch (err) {
            console.error(err)
        } finally {
            setIsLoading(false)
        }
    }



    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.orderId}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                    {/* react select de status */}
                    <SelectStyle
                        options={status.filter( sts => sts.value !== 'todos')}
                        menuPortalTarget={document.body}
                        placeholder='Status'
                        defaultValue={status.find(options => options.value === row.status) || null}
                        onChange={newstatus => {
                            setNewStatus(row.orderId, newstatus.value)
                        }}
                        isLoading={isLoading}
                    />

                </TableCell>
                <TableCell></TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>


                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Pedido
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Quantidade</TableCell>
                                        <TableCell>Produto</TableCell>
                                        <TableCell>Categoria</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {row.products.map((productRow) => (
                                        <TableRow key={productRow.id}>
                                            <TableCell component="th" scope="row">
                                                {productRow.quantity}
                                            </TableCell>
                                            <TableCell>{productRow.name}</TableCell>
                                            <TableCell>{productRow.category}</TableCell>
                                            <TableCell>
                                                <ProductsImg src={productRow.url} alt='imagem do produto' />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


export default Rows