

const callFetchCocktailData = (dataLimit) => {
    const searchInputFeild = document.getElementById('search-input-feild');
    const searchInputFeildValue = searchInputFeild.value;
    if (searchInputFeildValue === '') {
        alert('pls enter your desire cocktails in the search box');
        loadSpinner(false);
        return;
    }
    fetchCocktailData(searchInputFeildValue, dataLimit);
}