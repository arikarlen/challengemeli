import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { fetchItems } from "../../services/getBySearch";
import { SearchBox } from "../../components/commons/searchBox";
import { BreadcrumbMeli } from "../../components/commons/breadcrumb";
import { Item } from "../../components/lists/item";

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
                        <Item data={items} />
                    </Container>
                </>
            )}
        </>
    );
}
