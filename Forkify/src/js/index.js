
/******* Global App Controller *******/

import Search from "./models/Search";
import Recipe from "./models/Recipe"
import * as searchView from "./views/searchView";
import { Elements, renderLoader, clearLoader } from "./views/base";


/** SEARCH CONTROLLER
 * Search Object
 * current recipe object
 * Shopping list object
 * liked recipes
*/
const state = {};
const controlSearch = async () => {
    // 1. Get query from view
    const query = searchView.getInput(); //Elements.searchInput.value; // TODO

    if (query) {
        // 2.  new Search Object and add to state
        state.search = new Search();
        console.log(query);
    }

    // 3. Prepare UI for result
    searchView.clearInput();
    searchView.clearResults();
    searchView.clearBtn();
    renderLoader(Elements.searchResult);

    if (state.search != null) {
        // 4. Search for recipes
        await state.search.getResults(query);

        // 5. Render results for UI
        clearLoader();
    }
};

Elements.searchForm2.addEventListener("submit", e => {
    e.preventDefault();
    controlSearch();
});

Elements.searchResPages.addEventListener('click', e => {
    //   console.log(e.target);
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.clearBtn();
        searchView.renderResult(state.search.recipes, goToPage);
        console.log(goToPage);
    }
})


/** RECIPE CONTROLLER
 *
 * 
*/
let rId = [47025,47032, 54426, 47275]; 
const rec = new Recipe(rId[2]);
rec.getRecipe();
console.log(rec);



















