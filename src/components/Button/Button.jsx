import { Button } from "./Button.styled";

export function MainButton(props){
    return (
        <Button>{ props.children }</Button>
    )
}