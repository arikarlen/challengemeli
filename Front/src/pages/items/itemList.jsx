import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchItems } from "../../services/getBySearch";

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
        <div>
            {loading && <p>Cargando...</p>}

            <ul>
                {items &&
                    items.map((item) => (
                        <li key={item.id}>
                            <img src={item.picture} alt={item.title} />
                            <p>{item.title}</p>
                            <p>{item.price.amount}</p>
                            {item.free_shipping && <p>Envío gratis</p>}
                        </li>
                    ))}
            </ul>
        </div>
    );
}
