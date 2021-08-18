const searchBtn = document.querySelector('.header__search-icon')
const headerSearch = document.querySelector('.header__search');
searchBtn.onclick = function () {
    headerSearch.classList.toggle('active');
}