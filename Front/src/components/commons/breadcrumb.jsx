import { Breadcrumb, Container } from "react-bootstrap";
export function BreadcrumbMeli({ categories }) {
    return (
        <Container id="breadcrumb">
            <Breadcrumb>
                {categories &&
                    categories.map((category, index) => (
                        <Breadcrumb.Item key={index} active={index === categories.length - 1}>
                            {category}
                        </Breadcrumb.Item>
                    ))}
            </Breadcrumb>
        </Container>
    );
}
