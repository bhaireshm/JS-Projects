
/******* Global App Controller *******/

import Search from "./models/Search";
import * as searchView from "./views/searchView";
import {Elements} from "./views/base";
/**
 * Search Object
 * current recipe object
 * Shopping list object
 * liked recipes
*/

const state = {};

const controlSearch = async () => {
    // 1. Get query from view
    const query = searchView.getInput();
    console.log(query);

    if (query) {
        // 2.  new Search Object and add to state
        state.search = new Search();
    }

    // 3. Prepare UI for result


    // 4. Search for recipes
    await state.search.getResults(query);

        // 5. Render results for UI
    console.log(state.search.recipes);


};

Elements.searchForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log("lknvjlsbdjvsdkjbjl")
    // controlSearch();
});

