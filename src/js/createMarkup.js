export { oneCountryMarkup, moreCountryMarkup, appendCountryMarkup, refs }

const refs = {
    inputRef: document.querySelector('#search-box'),
    countryListContainer: document.querySelector('.country-list'),
    countryInfoContainer: document.querySelector('.country-info')
}  

function oneCountryMarkup(data) {
    const countryMarkup = data.map(el => {
            const { name: { official }, flags: { svg }, capital, population, languages } = el;    
        return `<div class="country-info__box">
      <img
        class="country-list__icon"
        src="${svg}"
        alt="${official} flag"
        width="100"
        heigth="100"
      />
      <p class="country-list__name">${official}</p>
    </div>
    <ul class="info-list">
      <li class="info-list__item"><span class="info-list__accent">Capital:</span> ${capital[0]}</li>
      <li class="info-list__item"><span class="info-list__accent">Population:</span> ${population}</li>
      <li class="info-list__item"><span class="info-list__accent">Languages:</span> ${Object.values(languages).join(', ')}</li>
    </ul>`}).join('')
    appendСountryMarkup(countryMarkup)
}

function moreCountryMarkup(data) {
         const countryMarkup = data.map(el => {
            const { name: { official }, flags: { svg } } = el;
            return `<li class="county-list__item">
        <img class="country-list__icon" src="${svg}" alt="${official} flag" width="50"
        height="50">
        <p class="country-list__name">${official}</p>
      </li>`
        }).join('')
        appendСountriesMarkup(countryMarkup)
}

function appendСountriesMarkup(countryMarkup) {
    refs.countryListContainer.insertAdjacentHTML('afterbegin', countryMarkup)
}
function appendСountryMarkup(countryMarkup) {
    refs.countryInfoContainer.insertAdjacentHTML('afterbegin', countryMarkup)
}


