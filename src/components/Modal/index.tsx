import { Container } from "./styles";


type ModalProps = {
    title: string;
    children?: JSX.Element;
}

export const Modal = ({ children, title }: ModalProps) => {

    return (
        <Container>
            <div className="modal">
                <div className="title">{title}</div>
                <div className="content">
                    {children}
                </div>
            </div>
        </Container>
    );
}