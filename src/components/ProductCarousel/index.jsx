import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Container, ContainerItems } from './style';
import { Card } from '../Card';
import { useLocation, useNavigate } from 'react-router-dom';

export function ProductCarousel() {

    const [products, setProducts] = useState([])

    const { search } = useLocation()
    const queryParams = new URLSearchParams(search)
    const categoryId = +queryParams.get('categoria')
    
   
    const newFilteredProducts = products.some(prod => prod.category_id === categoryId)
    ? products.filter(prod => prod.category_id === categoryId)
    : products;

    useEffect(() => {
        async function loadProduct() {
            const { data } = await api.get('products')
            setProducts(data)
        }
        loadProduct()
    }, [2000])



    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        Desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 1.5
        },
    };


    return (
        <Container>
 
            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                itemClass='carouselClass'
            >
                {newFilteredProducts.map((product) => (
                    <ContainerItems key={product.id}>
                        <Card products={product} />
                    </ContainerItems>
                ))}
            </Carousel>

        </Container>
    );
}
