import { Form, Button, InputGroup, Container, Row, Col } from "react-bootstrap";
export function ItemTitle({ title, price, condition }) {
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
                                <Button variant="primary">Comprar</Button>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
