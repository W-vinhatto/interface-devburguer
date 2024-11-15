import { ErrosMessageStyles } from "./styled";

export function ErrorMessage({ children }) {
    return (
        <ErrosMessageStyles>
            {children}
        </ErrosMessageStyles>
    )
}