// Importar las dependencias necesarias
const axios = require("axios");
const express = require("express");

// Inicializar la aplicación express
const app = express();
const PORT = 5000;

// Definir el endpoint de la API
app.get("/api/items", async (req, res) => {
    try {
        // Obtener el parámetro de búsqueda de la solicitud
        const query = req.query.q;

        // Llamar al endpoint de MercadoLibre con el parámetro de búsqueda
        const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);

        // Formatear los datos de la respuesta
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
                    decimals: 0, // No se proporciona la precisión en el precio
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
            })),
        };

        // Devolver los datos formateados como respuesta
        res.json(formattedResponse);
    } catch (error) {
        console.error("Error al obtener los datos de MercadoLibre:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor express en ejecución en el puerto ${PORT}`);
});
