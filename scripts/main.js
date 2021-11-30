const btnFilters = document.getElementById('btn-filters');
const listFilters = document.getElementById('filters');

function openFilters(){

    listFilters.classList.toggle('active');

}

btnFilters.addEventListener('click', openFilters);