import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home.jsx";
import { ItemList } from "../pages/items/itemList.jsx";
import { ItemById } from "../pages/items/itemById.jsx";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/items" element={<ItemList />} />
                <Route exact path="/items/:id" element={<ItemById />} />
            </Routes>
        </BrowserRouter>
    );
}
