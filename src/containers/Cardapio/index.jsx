import { useEffect, useState } from "react";
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice'
import Carousel from "react-multi-carousel";
import { useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart } from '@phosphor-icons/react'
import { useCart } from '../../hooks/CartContext'






import { Button } from '../../components/Button'
import {
    CardContainer,
    Container,
    ContainerCategory,
    DivButton,
    LinkCatgory,
    ContainerCardapio,
    ProductsContainer
} from "./styles";



export function Cardapio() {
    const { putProductsCart } = useCart()

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredproducts, setFilteredproducts] = useState([])

    const navigate = useNavigate()
    const { search } = useLocation()

    // validação de params enviados na navegação da home
    const queryParams = new URLSearchParams(search)

    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryid = +queryParams.get('categoria')

        if (categoryid) {
            return categoryid
        }
        return 0
    })


    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')
            const allCategory = [{ id: 0, name: 'todas' }, ...data]
            setCategories(allCategory)
        }

        async function loadProduct() {
            const { data } = await api.get('products')
            setProducts(data)
        }
        loadCategories()
        loadProduct()
    }, [])

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredproducts(products)
        } else {
            const newFilteredproducts = products.filter(
                (prod) => prod.category_id === activeCategory
            )
            setFilteredproducts(newFilteredproducts)
        }
    }, [products, activeCategory])




    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        Desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 2.5
        },
    };




    return (
        <Container>
            <ContainerCardapio>

                <h2>Cardápio</h2>

                <Carousel
                    responsive={responsive}
                    infinite={true}
                    partialVisible={false}
                    itemClass='carouselClass'
                >
                    {categories.map((categoryname) => (
                        <ContainerCategory key={categoryname.id}>
                            <LinkCatgory
                                $isactive={categoryname.id === activeCategory}
                                onClick={() => {
                                    navigate(
                                        {
                                            pathname: '/cardapio',
                                            search: `?categoria=${categoryname.id}`
                                        },
                                        {
                                            replace: true
                                        }
                                    )
                                    setActiveCategory(categoryname.id)
                                }}>
                                {categoryname.name}
                            </LinkCatgory>
                        </ContainerCategory>
                    ))}
                </Carousel>


                <ProductsContainer>
                    {filteredproducts.map((product) => (
                        <CardContainer key={product.id}>
                            <img src={product.url} />
                            <p>{product.name}</p>
                            <p>{product.category.name}</p>
                            <DivButton>
                                <strong>{formatPrice(product.price)}</strong>
                                <div>
                                    <Button onClick={() => putProductsCart(product)}>
                                        <ShoppingCart size={22} />
                                    </Button>
                                </div>
                            </DivButton>
                        </CardContainer>
                    ))}
                </ProductsContainer>
            </ContainerCardapio>
        </Container>
    )
}