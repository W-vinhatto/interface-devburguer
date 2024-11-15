
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




import { useEffect, useState } from "react";
import { Contaeiner, LinkMenu, Menu } from "./style";
import { api } from '../../../services/api'
import Rows from './Rows';
import formatDate from '../../../utils/formatDate';
import status from './OrderStatus';


function Orders() {

    const [orders, setOrders] = useState([])
    const [rows, setRows] = useState([])

    const [filteredOrders, setFilteredOrders] = useState([])
    const [activeStatus, setActiveStatus] = useState(1)




    useEffect(() => {
        async function loadingOrders() {
            const { data } = await api.get('order')
            setOrders(data)
            setFilteredOrders(data)
        }
        loadingOrders()
    }, [])



    function createData(order) {
        return {
            name: order.user.name,
            orderId: order._id,
            date: formatDate(order.createdAt),
            status: order.status,
            products: order.products
        };
    }

    useEffect(() => {
        const newRows = filteredOrders.map(ord => createData(ord))
        setRows(newRows)
    }, [filteredOrders])


    // chamada para buscas o status atual com finIndex e assim que acahado a posição dele
    // assi que encontrado compara com rows que está na tela mantendo somente com status da seleçãp
    // filtro para retirar status assim que alterado
    useEffect(() => {
        const statusIndex = status.findIndex(sts => sts.id === activeStatus)
        const newFilteredOrders = orders.filter(
            newOrd => newOrd.status === status[statusIndex].value)

            setFilteredOrders(newFilteredOrders)
    }, [orders])



    // validando filtro de status - para busca rapida
    function handleStatus(status) {
        if (status.id === 1) {
            setFilteredOrders(orders)
        } else {
            const newOrders = orders.filter((ord) => ord.status === status.value)
            setFilteredOrders(newOrders)
        }
        setActiveStatus(status.id)
    }



    return (
        <Contaeiner>
            <Menu>
                {status && status.map(status => (
                    <LinkMenu
                        key={status.id}
                        onClick={() => handleStatus(status)}
                        isActiveStatus={activeStatus === status.id}
                    >
                        {status.label}
                    </LinkMenu>
                ))}
            </Menu>

            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Pedido</TableCell>
                            <TableCell>Cliente</TableCell>
                            <TableCell>Data do pedido</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Rows
                                key={row.orderId}
                                row={row}
                                setOrders={setOrders}
                                orders={orders} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Contaeiner>
    )
}

export default Orders