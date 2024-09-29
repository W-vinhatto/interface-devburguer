import PropTypes from 'prop-types'


import { ContainerButton } from './style'

export function Button({ children, ...props }) {
    return (
        <ContainerButton {...props} >{children}</ContainerButton>
    )
}

Button.propTypes = {
    children: PropTypes.string,
} 