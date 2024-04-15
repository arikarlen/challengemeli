import { useState } from "react";
import { Container, Row, Col, Image, Form, InputGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logoMeli.png";
import { Search } from "react-bootstrap-icons";

export function SearchBox() {
    const [inputError, setInputError] = useState(false);
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch(event);
        }
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const inputValue = document.getElementById("searchInput").value;
        if (inputValue.length < 3) {
            setInputError(true);
            return;
        }

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
                                <Form.Control id="searchInput" size="lg" type="text" placeholder="Ingrese 3 caracteres..." onKeyDown={handleKeyDown} />
                                <Button variant="secondary" as={Link} to="/items" onClick={handleSearch}>
                                    <Search />
                                </Button>
                            </InputGroup>
                            {inputError && <p>Por favor ingrese al menos 3 caracteres para buscar.</p>}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
