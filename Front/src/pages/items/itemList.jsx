import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { fetchItems } from "../../services/getBySearch";
import { SearchBox } from "../../components/commons/searchBox";

export function ItemList() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get("search");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const fetchedItems = await fetchItems(searchValue);
            setItems(fetchedItems);
            setLoading(false);
        };

        fetchData();
    }, [searchValue]);

    return (
        <>
            <SearchBox />
            {loading && <div className="loading">Loading&#8230;</div>}
            <Container id="breadcrumb">Breadcrumbs</Container>

            <Container id="listContent">
                {items &&
                    items.map((item) => (
                        <Row key={item.id}>
                            <Col md={2}>
                                <img src={item.picture} alt={item.title} />
                            </Col>
                            <Col md={8}>
                                <p>{item.price.amount}</p>
                                <h1>{item.title}</h1>
                                {item.free_shipping && <p>Envío gratis</p>}
                            </Col>
                            <Col md={2}>Lugar</Col>
                        </Row>
                    ))}
            </Container>
        </>
    );
}
