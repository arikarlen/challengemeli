import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchBox } from "../../components/commons/searchBox";
import { fetchItem } from "../../services/getById";
import { Container, Row, Col, Image } from "react-bootstrap";
import { BreadcrumbMeli } from "../../components/commons/breadcrumb";
import { ItemTitle } from "../../components/item/itemTitle";
import { ItemDescription } from "../../components/item/itemDescription";
export function ItemById() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const fetchedItem = await fetchItem(id);
            setItem(fetchedItem.item);
            setLoading(false);
        };

        fetchData();
    }, [id]);

    return (
        <>
            <SearchBox />
            {loading ? (
                <div className="loading">Loading&#8230;</div>
            ) : (
                <>
                    <BreadcrumbMeli categories={[item?.title]} />
                    <Container id="itemContent">
                        <Row>
                            <Col md={8}>
                                <Image src={item?.picture} />
                            </Col>
                            <Col md={4}>
                                <ItemTitle title={item?.title} price={item?.price.amount} condition={item?.condition} />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8} className="itemDescription">
                                <ItemDescription description={item?.description} />
                            </Col>
                        </Row>
                    </Container>
                </>
            )}
        </>
    );
}
