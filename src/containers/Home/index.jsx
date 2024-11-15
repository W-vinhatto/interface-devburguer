import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import lancheSvg from '../../assets/lancheSvg.svg'

import { ProductCarousel, CardCategory } from '../../components';


import {
    CategoryName,
    Container,
    ContainerCard,
    ContainerCarousel,
    ContainerCategory,
    Contentimg,
    ContentTitle
} from "./style";




export const Home = () => {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    const [activeCategory, setActiveCategory] = useState(0)
    const [filteredProducts, setFilteredProducts] = useState()

    const navigate = useNavigate()


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
        if (activeCategory == 0) {
            setFilteredProducts(products)
        } else {
            const newFilteredProducts = products.filter(
                (product) => product.category_id === activeCategory
            )

            setFilteredProducts(newFilteredProducts)
        }
    }, [products, activeCategory])


    return (
        <Container>
            <ContentTitle>
                <h2>Além de apenas Burguers</h2>
                <h3>É uma revolução do sabor!</h3>
            </ContentTitle>
            <Contentimg>
                <div>
                    <img src={lancheSvg} />
                </div>
            </Contentimg>

            <ContainerCard>
                {categories.map((category) => (
                    <CategoryName
                        key={category.id}
                        $isactive={category.id === activeCategory}
                        onClick={() => {
                            navigate(
                                {
                                    pathname: '/home',
                                    search: `?categoria=${category.id}`
                                },
                                {
                                    replace: true
                                },
                            )
                            setActiveCategory(category.id)
                        }}
                    >
                        {category.name}
                    </CategoryName>
                ))}
            </ContainerCard>

            <ContainerCarousel>
                <ProductCarousel activeCategory={filteredProducts} />
            </ContainerCarousel>

            <ContainerCategory>
                <CardCategory />
            </ContainerCategory>
        </Container>
    );
}