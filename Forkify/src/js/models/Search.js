import axios from "axios";

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults(query) {
        const key = ["e5e257e93c030767b10d7787b5c1e03e", "587689d7ee64a97fb2b00934fdf8aeca", "030843210e6887830aca851e82d3b9c2"];
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const api = "https://www.food2fork.com/api/search";

        try {
            const result = await axios(`${proxy}${api}?key=${key[0]}&q=${query}`);
            this.recipes = result.data.recipes;
            //  console.log(result);

        } catch (error) {
            console.log(error);
        }
    }
}


