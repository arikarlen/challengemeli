import axios from "axios";
import { BFF_API } from "../config/constants";

export async function fetchItem(id) {
    try {
        const response = await axios.get(`${BFF_API}/items/${id}`);
        return response.data;
    } catch (error) {
        return [];
    }
}
