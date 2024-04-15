import { Breadcrumb, Container } from "react-bootstrap";
import { APP_URL } from "../../config/constants";
export function BreadcrumbMeli({ categories }) {
    return (
        <Container id="breadcrumb">
            <Breadcrumb>
                {categories &&
                    categories.map((category, index) => (
                        <Breadcrumb.Item key={index} active={index === categories.length - 1} href={APP_URL}>
                            {category}
                        </Breadcrumb.Item>
                    ))}
            </Breadcrumb>
        </Container>
    );
}
