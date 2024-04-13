const axios = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.get("/api/items", async (req, res) => {
    try {
        const query = req.query.q;
        const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);

        const formattedResponse = {
            author: {
                name: "Nombre",
                lastname: "Apellido",
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

app.listen(PORT, () => {
    console.log(`Servidor express en ejecución en el puerto ${PORT}`);
});
