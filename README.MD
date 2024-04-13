
# Challenge Meli

Aplicación para búsqueda de productos de Mercado Libre, realizada para el challenge de ingreso

La misma consta de un pequeño BFF que se conecta con las api´s de MeLi para obtener los productos y filtrarlos.


## BFF

### Inicializar aplicacíon

* Posicionarse en Challenge/Backend
* En una terminal, ejecutar el comando node server.js 


**URL:** localhost:5000

**Server:** Node, Express


### API Reference



#### Get items

```http
  GET /api/items?q=:query
```

| Parametro | tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `query`      | `string` | **Requerido**. Query de busqueda |

#### Get item by id

```http
  GET /api/items/:id
```

| Parametro | tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Requerido**. Id del producto |



