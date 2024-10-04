

import { ContainerButton } from './style'

export function Button({ children, ...props }) {
    return (
        <ContainerButton {...props} >{children}</ContainerButton>
    )
}
