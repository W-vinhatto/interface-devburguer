import { Table } from '../index'
import { useCart } from '../../hooks/CartContext'
import { formatPrice } from '../../utils/formatPrice'
import { ButtonGroup, EmptyCart, ProductImage, TotalPrice, TrashIcon } from './styles'
import { Trash } from '@phosphor-icons/react'



export function CartItens() {

    const {
        cartProducts,
        deletProducts,
        increseProduct,
        decreseProduct
    } = useCart()


    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>

            <Table.Body>
                {cartProducts?.length ? (
                    cartProducts.map(product => (
                        <Table.Tr key={product.id}>
                            <Table.Td>
                                <ProductImage src={product.url} />
                            </Table.Td>

                            <Table.Td>{product.name}</Table.Td>

                            <Table.Td>{formatPrice(product.price)}</Table.Td>

                            <Table.Td>
                                <ButtonGroup>
                                    <button onClick={() => decreseProduct(product.id)} > - </button>
                                    {product.quantity}
                                    <button onClick={() => increseProduct(product.id)} > + </button>
                                </ButtonGroup>
                            </Table.Td>

                            <Table.Td>
                                <TotalPrice>
                                    {formatPrice(product.quantity * product.price)}
                                </TotalPrice>
                            </Table.Td>

                            <Table.Td>
                                <TrashIcon onClick={() => deletProducts(product.id)}>
                                    <Trash size={32} />
                                </TrashIcon>
                            </Table.Td>
                        </Table.Tr>
                    ))
                ) : <EmptyCart>carrinho Vazio</EmptyCart>}
            </Table.Body>
        </Table.Root>
    )
} 