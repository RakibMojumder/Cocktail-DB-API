

const callFetchCocktailData = (dataLimit) => {
    const searchInputFeild = document.getElementById('search-input-feild');
    const searchInputFeildValue = searchInputFeild.value;
    fetchCocktailData(searchInputFeildValue, dataLimit);
}