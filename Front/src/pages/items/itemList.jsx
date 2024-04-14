import { useState, useEffect } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import { fetchItems } from "../../services/getBySearch";
import { SearchBox } from "../../components/commons/searchBox";
import { Truck } from "react-bootstrap-icons";
import { BreadcrumbMeli } from "../../components/commons/breadcrumb";

export function ItemList() {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState();
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get("search");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const fetchedItems = await fetchItems(searchValue);
            setItems(fetchedItems.items);
            setCategories(fetchedItems.categories);
            setLoading(false);
        };

        fetchData();
    }, [searchValue]);

    return (
        <>
            <SearchBox />
            {loading ? (
                <div className="loading">Loading&#8230;</div>
            ) : (
                <>
                    <BreadcrumbMeli categories={categories} />
                    <Container id="listContent">
                        {items &&
                            items.map((item) => (
                                <Row key={item.id} className="listItem">
                                    <Col md={2}>
                                        <img src={item.picture} alt={item.title} />
                                    </Col>
                                    <Col md={6}>
                                        <h3>
                                            $ {item.price.amount.toLocaleString()} {item.free_shipping && <Truck color="black" size={24} className="freeShippingIcon" />}
                                        </h3>
                                        <Link to={`/items/${item.id}`}>
                                            <h1>{item.title}</h1>
                                        </Link>
                                    </Col>
                                    <Col md={{ span: 2, offset: 2 }}>
                                        <p>Buenos aires</p>
                                    </Col>
                                </Row>
                            ))}
                    </Container>
                </>
            )}
        </>
    );
}
