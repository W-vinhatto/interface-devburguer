import { useEffect, useState } from "react"
import { Card, CategoryButton, Container, Content, Divbutton } from "./styled"
import { api } from '../../services/api';
import { useNavigate } from "react-router-dom";
import { ArrowFatLinesRight } from '@phosphor-icons/react'





export function CardCategory() {


    const [categories, setCategories] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')
            const allCategory = [{ id: 0, name: 'todas' }, ...data]
            setCategories(allCategory)
        }
        loadCategories()
    }, [])


    return (
        <Container>
            <h2>Menu</h2>
            <Content>
                {categories.map((categoryname) => (
                    <Card key={categoryname.id}>
                        <p>{categoryname.name}</p>
                        <Divbutton>
                            <CategoryButton
                                onClick={() => {
                                    navigate({
                                        pathname: '/cardapio',
                                        search: `?categoria=${categoryname.id}`
                                    },
                                    )
                                }}>
                                <ArrowFatLinesRight tamanho={32} />
                            </CategoryButton>
                        </Divbutton>
                    </Card>
                ))}
            </Content>
        </Container>
    )
}