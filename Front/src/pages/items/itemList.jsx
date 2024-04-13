import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ItemList() {
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get("search");
    return (
        <>
            <h1>Listado de {searchValue}</h1>
        </>
    );
}
