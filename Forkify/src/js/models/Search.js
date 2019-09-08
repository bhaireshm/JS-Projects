import axios from "axios";
import { api, key, proxy } from "../config"
export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults(query) {
        try {
            const result = await axios(`${proxy}${api.search}?key=${key}&q=${query}`);
            this.recipes = result.data.recipes;
            console.log(result);

        } catch (error) {
            console.log(error);
        }
    }
}


