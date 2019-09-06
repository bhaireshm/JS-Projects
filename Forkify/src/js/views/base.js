
export const Elements = {

    searchForm2: document.forms[0],
    searchForm: document.getElementById('search'),
    searchInput: document.querySelector('.search__field'),
    searchRecList: document.querySelector('.results__list'),
    searchResult: document.querySelector('.results'),
    searchRecPages :document.querySelector('.results__pages')

};

export const ElementStrings = {
    loader: 'loader'
};

export const renderLoader = parent => {

    const loader = `
    <div class="${ElementStrings.loader}">
        <svg>
            <use href="img/icons.svg#icon-cw"></use>
        </svg>
    </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${ElementStrings.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
};


 // submitForm: () => { //     document.getElementById('search').addEventListener("submit", e => { //         alert(e); //         //alert(this.searchInput); //     }); // }

// export const elements = new Map();
// elements.set("searchForm", document.getElementById('search'));
// elements.set("searchInput", document.getElementById('search__field'));

// // Elements.submitForm();
// // export let searchForm = document.querySelector('.search');



//  console.log("Base.js :" + Elements.searchForm, Elements.searchInput  );

// // console.log(document.getElementById('search'))
// // ;
// var a = document.getElementById('search');
// console.log(a);


