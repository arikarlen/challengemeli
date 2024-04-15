import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Truck } from "react-bootstrap-icons";
export function Item({ data }) {
    return (
        data &&
        data.map((item) => (
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
        ))
    );
}
