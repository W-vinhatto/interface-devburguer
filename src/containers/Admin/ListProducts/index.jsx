
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel'

import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { formatPrice } from '../../../utils/formatPrice'


import { Container, DeleteIcon, EditIconStyles, Img } from "./style";
import { useNavigate } from 'react-router-dom';
import paths from '../../../constants/paths';


function ListProducts() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadingProducts() {
      const { data } = await api.get('products')
      setProducts(data)
    }
    loadingProducts()
  }, [])


  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckBoxIcon style={{ color: '#228b22' }} />
    }
    return <CancelIcon style={{ color: '#cc1717' }} />
  }


  function editProduct(product) {
    return navigate(paths.EditProducts, { state: { product } })
  }


  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell >Preço</TableCell>
              <TableCell align='center'>Produto em oferta</TableCell>
              <TableCell align='center'>imagem</TableCell>
              <TableCell >Editar produto</TableCell>
              <TableCell >Deletar produto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {products && products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell >{formatPrice(product.price)}</TableCell>
                <TableCell align='center' >{isOffer(product.offer)}</TableCell>
                <TableCell >
                  <Img src={product.url} alt='imagem do produto' />
                </TableCell>
                <TableCell align='center' >
                  <EditIconStyles onClick={() => editProduct(product)} />
                </TableCell>
                <TableCell align='center' >
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListProducts