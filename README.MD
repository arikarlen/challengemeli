# Challenge Meli

Aplicación para búsqueda de productos de Mercado Libre, realizada para el challenge de ingreso

La misma consta de un pequeño BFF que se conecta con las api´s de MeLi para obtener los productos y filtrarlos.

## BFF

### Inicializar aplicacíon

-   Posicionarse en Challenge/Backend
-   En una terminal, ejecutar el comando node server.js

**URL:** localhost:5000

**Server:** Node, Express

### API Reference

#### Get items

```http
  GET /api/items?q=:query
```

| Parametro | tipo     | Descripcion       |
| :-------- | :------- | :---------------- |
| `query`   | `string` | Query de busqueda |

#### Get item by id

```http
  GET /api/items/:id
```

| Parametro | tipo     | Descripcion     |
| :-------- | :------- | :-------------- |
| `id`      | `string` | Id del producto |

## FRONT

### Inicializar aplicacíon

-   Levantar primero el BFF siguiendo los pases anteriormente descriptos
-   Posicionarse en Challenge/Front
-   En una terminal, Ejecutar npm install para instalar las dependencias
-   Luego ejecutar npm run develop para levantar la aplicacion.
-   La aplicacion se inicializara en modo dev, tomando las variables DEV de .env-cmdrc.json
-   En caso de generar nuevos entornos (Staging o Prod), se deberán configurar las variables correspondientes en .env-cmdrc.json

**URL:** localhost:5173

**Tecnologías:** React, Vite, Boostrap

## Observaciones

-   No se encontro en las api´s proporcionadas, un campo para obtener la localidad. Se resolvío desde el BFF, con un json de provincias argentinas. Al realizar el get, se consulta ese json, que se encuentra en /Backend/assets/provinces.json, y se agrega un campo con una provincia aleatoria.

-   Todas las imágenes proporcionadas de la api, son chicas. Se adaptaron a las medidas pedidas, pero esto impacta en la calidad de las mismas.
