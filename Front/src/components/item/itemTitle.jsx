import { useState } from "react";
import { Form, Button, InputGroup, Container, Row, Col } from "react-bootstrap";
import { ToastMeli } from "../commons/toastMeli";
export function ItemTitle({ title, price, condition }) {
    const [btnText, setBtntext] = useState("Comprar");
    const [addToCart, setAddToCart] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const HandleAddItem = () => {
        setBtntext("Agregando al carrito");
        setAddToCart(true);
        setTimeout(() => {
            setBtntext("Comprar");
            setAddToCart(false);
            setShowToast(true);
        }, 3000);
    };

    return (
        <>
            <Container className="itemTitleContainer">
                <Row className="itemTitle">
                    <Col md={9}>
                        <h3>{condition == "new" && "Nuevo - "} 348 vendidos</h3>
                        <h1>{title}</h1>
                        <h2>$ {price?.toLocaleString()}</h2>
                        <Form>
                            <InputGroup className="mb-3">
                                <Button variant="primary" onClick={HandleAddItem} disabled={addToCart}>
                                    {btnText}
                                </Button>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <ToastMeli show={showToast} setShow={setShowToast} toastText="Producto agregado con éxito" />
        </>
    );
}
