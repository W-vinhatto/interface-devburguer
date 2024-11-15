import { useEffect, useState } from "react";
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import Carousel from "react-multi-carousel";
import { useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart } from '@phosphor-icons/react';
import { useCart } from '../../hooks/CartContext';
import { Button } from '../../components/Button';
import lancheSvg from '../../assets/lancheSvg.svg'



import {
    CardContainer,
    Container,
    ContainerCategory,
    DivButton,
    LinkCatgory,
    ContainerCardapio,
    ProductsContainer,
    Alert,
    Checked,
    Contentimg
} from "./styles";

export function Cardapio() {
    const { putProductsCart } = useCart();

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredproducts, setFilteredproducts] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const [showCheked, setShowCheked] = useState(false);
    const [cheked, setCheked] = useState({});


    const navigate = useNavigate();
    const { search } = useLocation();

    const queryParams = new URLSearchParams(search);

    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryid = +queryParams.get('categoria');
        return categoryid || 0;
    });

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories');
            const allCategory = [{ id: 0, name: 'todas' }, ...data];
            setCategories(allCategory);
        }

        async function loadProduct() {
            const { data } = await api.get('products');

            setProducts(data);
        }
        loadCategories();
        loadProduct();
    }, []);

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredproducts(products);
        } else {
            const newFilteredproducts = products.filter(
                (prod) => prod.category_id === activeCategory
            );
            setFilteredproducts(newFilteredproducts);
        }
    }, [products, activeCategory]);



    // alert de notificação para cada item adicionado ao carrinho
    const handleAddToCart = (product) => {
        putProductsCart(product);
        setAlertMessage(` 
            foi adicionado ao carrinho!`);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };




    const check = (product) => {
        setCheked(product)
        setShowCheked(true);

    };

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
                <Contentimg>
                    <div>
                        <img src={lancheSvg} />
                    </div>
                </Contentimg>

                <h2>Cardápio</h2>

                {showAlert && (
                    <Alert>{alertMessage}</Alert>
                )}


                {showCheked && (
                    <Checked>
                        <div>
                            <img src={cheked.url} alt={cheked.name} />
                            <p>{cheked.name}</p>
                            <p>{formatPrice(cheked.price)}</p>
                            <p>{cheked.descripition}</p>
                            <Button onClick={() => setShowCheked(false)}>
                                voltar
                            </Button>
                        </div>
                    </Checked>
                )}

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
                                    );
                                    setActiveCategory(categoryname.id);
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
                            <button
                                id="button-detalhes"
                                onClick={() => check(product)} >
                                detalhes
                            </button>

                            <DivButton>
                                <strong>{formatPrice(product.price)}</strong>
                                <div>
                                    <Button onClick={() => handleAddToCart(product)}>
                                        <ShoppingCart size={22} />
                                    </Button>
                                </div>
                            </DivButton>
                        </CardContainer>
                    ))}
                </ProductsContainer>
            </ContainerCardapio>
        </Container>
    );
}
