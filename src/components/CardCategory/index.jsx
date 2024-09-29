import { useEffect, useState } from "react"
import { Card, CategoryButton, Container, Divbutton, DivImg } from "./styled"
import { api } from '../../services/api';
import { useNavigate } from "react-router-dom";




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
            {categories.map((categoryname) => (
                <Card key={categoryname.id}>
                    <DivImg>
                        <img src={categoryname?.url} alt={categoryname.name} />
                    </DivImg>
                    <p>{categoryname.name}</p>
                    <Divbutton>
                        <CategoryButton
                            onClick={() => {
                                navigate( {
                                    pathname: '/cardapio',
                                    search: `?categoria=${categoryname.id}`
                                },
                                )
                            }}>
                            >
                        </CategoryButton>
                    </Divbutton>
                </Card>
            ))}
        </Container>
    )
}