import axios from "axios";
import { api, proxy, key } from "../config";

export default class Recipe {
    constructor(id) {
        this.id = id;
    }
    async getRecipe() {
        try {
            const result = await axios(`${proxy}${api.get}?key=${key}&rId=${this.id}`);
        this.title = result.data.recipe.title;
        this.author = result.data.recipe.publisher;
        this.img = result.data.recipe.image_url;
        this.url = result.data.recipe.source_url;
        this.ingredients = result.data.recipe.ingredients;
        this.socialRank = result.data.recipe.social_rank;
        //console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
}














