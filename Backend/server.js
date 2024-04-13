const axios = require("axios");
const express = require("express");

const app = express();
const PORT = 5000;

app.get("/api/items", async (req, res) => {
    try {
        const query = req.query.q;
        const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);

        const formattedResponse = {
            author: {
                name: "Ariel",
                lastname: "Karlen",
            },
            categories: response.data.filters[0]?.values[0]?.path_from_root.map((category) => category.name) || [],
            items: response.data.results.slice(0, 4).map((item) => ({
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: 0,
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
            })),
        };

        res.json(formattedResponse);
    } catch (error) {
        console.error("Error al obtener los datos de MercadoLibre:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

app.get("/api/items/:id", async (req, res) => {
    try {
        const itemId = req.params.id;
        const response = await axios.get(`https://api.mercadolibre.com/items/${itemId}`);
        const descriptionResponse = await axios.get(`https://api.mercadolibre.com/items/${itemId}/description`);
        const formattedResponse = {
            author: {
                name: "Ariel",
                lastname: "Karlen",
            },
            item: {
                id: response.data.id,
                title: response.data.title,
                price: {
                    currency: response.data.currency_id,
                    amount: response.data.price,
                    decimals: 0,
                },
                picture: response.data.thumbnail,
                condition: response.data.condition,
                free_shipping: response.data.shipping.free_shipping,
                sold_quantity: response.data.sold_quantity,
                description: descriptionResponse.data.plain_text,
            },
        };
        res.json(formattedResponse);
    } catch (error) {
        console.error("Error al obtener los detalles del artículo:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor express en ejecución en el puerto ${PORT}`);
});
