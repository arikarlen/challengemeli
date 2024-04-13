import { Container, Row, Col, Image, Form, InputGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logoMeli.png";
import { BsSearch } from "react-icons/bs";

export function SearchBox() {
    const handleSearch = (event) => {
        event.preventDefault();
        const inputValue = document.getElementById("searchInput").value;
        window.location.href = `/items?search=${inputValue}`;
    };
    return (
        <Container fluid id="searchBox">
            <Container>
                <Row>
                    <Col md={1}>
                        <Image src={Logo} fluid />
                    </Col>
                    <Col md={11}>
                        <Form>
                            <InputGroup className="mb-3">
                                <Form.Control id="searchInput" size="lg" type="text" placeholder="Ingrese 3 caracteres..." />
                                <Button variant="secondary" as={Link} to="/items" onClick={handleSearch}>
                                    <BsSearch />
                                </Button>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
