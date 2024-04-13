import axios from "axios";
import { BFF_API } from "../config/constants";

export async function fetchItems(searchValue) {
    try {
        const response = await axios.get(`${BFF_API}/items?q=${searchValue}`);
        return response.data.items;
    } catch (error) {
        return [];
    }
}
