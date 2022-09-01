
const fetchCocktailData = async (search, dataLimit) => {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    const data = await res.json();
    displayCocktailData(data.drinks, dataLimit);
};


// display cocktail data
const displayCocktailData = (datas, dataLimit) => {
    const cocktailContainer = document.getElementById('cocktail-container');
    cocktailContainer.innerHTML = '';

    // show error message
    const erroerMessage = document.getElementById('error-message');
    if (datas === null) {
        erroerMessage.classList.remove('d-none');
        loadSpinner(false);
    } else {
        erroerMessage.classList.add('d-none');
    };


    // show all button
    const showAll = document.getElementById('show-all')
    if (datas === null) {
        showAll.classList.add('d-none');
        return;
    }
    else if (dataLimit && datas.length > 8) {
        datas = datas.slice(0, 8);
        showAll.classList.remove('d-none');
    } else {
        showAll.classList.add('d-none');
    }

    datas.forEach(data => {
        // console.log(data)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${data.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.strDrink}</h5>
                <p class="card-text">${data.strInstructions.length > 40 ? data.strInstructions.slice(0, 40) + '...' : data.strInstructions + ' Lorem ipsum dolor sit.'}</p>
                <button class="btn btn-outline-success">Show Details</button>
            </div>
        </div>
        `;

        cocktailContainer.appendChild(div);
    });
    loadSpinner(false);
};


// show data by click searh button
document.getElementById('search-btn').addEventListener('click', () => {
    loadSpinner(true);
    callFetchCocktailData(8)
})

// show data by click searh press enter
document.getElementById('search-input-feild').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        loadSpinner(true);
        callFetchCocktailData(8);
    }
});


// load spinner
const loadSpinner = (isLoading) => {
    const spinner = document.getElementById('spinner');
    if (isLoading) {
        spinner.classList.remove('d-none');
    } else {
        spinner.classList.add('d-none');
    }
}


// show all btn
document.getElementById('show-all-btn').addEventListener('click', () => {
    callFetchCocktailData();
})

// fetchCocktailData('Margarita')