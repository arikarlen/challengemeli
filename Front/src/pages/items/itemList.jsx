import React, { useState } from "react";
import axios from "axios";

export function ItemList() {
    const [query, setQuery] = useState("");
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5000/api/items?q=${query}`);
            setItems(response.data.items);
        } catch (error) {
            console.error("Error al buscar items:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar..." />
            <button onClick={handleSearch} disabled={loading}>
                Buscar
            </button>

            {loading && <p>Cargando...</p>}

            <ul>
                {items.map((item) => (
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
