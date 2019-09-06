
/******* Global App Controller *******/

import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { Elements, renderLoader, clearLoader } from "./views/base";
/**
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
    renderLoader(Elements.searchResult);

    if (state.search != null) {
        // 4. Search for recipes
        await state.search.getResults(query);

        // 5. Render results for UI
        clearLoader();
        searchView.renderResult(state.search.recipes);
    }
};

Elements.searchForm2.addEventListener("submit", e => {
    e.preventDefault();
    controlSearch();
});

Elements.searchRecPages.addEventListener('click', e=>{
 //   console.log(e.target);
    const btn = e.target.closest('.btn-inline');
    if(btn){
        const goToPage = btn.dataset.goto;
        console.log(goToPage)
    }
})

