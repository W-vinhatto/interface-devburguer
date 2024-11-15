import { useLocation, useParams } from "react-router-dom";
import { SideMenuAdmin } from "../../components/SideMenuAdmin";
import ListProducts from "./ListProducts";
import Orders from "./Orders";
import Newproducts from "./NewProducts";


import paths from "../../constants/paths";

import { Container, ContainerItems } from "./style";
import EditProduct from "./EditProduct";


export function Admin() {
    const { pathname } = useLocation();

    return (
        <Container>
            <SideMenuAdmin path={pathname} />
            <ContainerItems>
                {pathname === paths.Order && <Orders />}
                {pathname === paths.Products && <ListProducts />}
                {pathname === paths.NewProduct && <Newproducts />}
                {pathname === paths.EditProducts && <EditProduct />}
            </ContainerItems>
        </Container>
    )
}