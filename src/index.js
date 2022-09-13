import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchCountries } from './js/fetchCountries'
import { oneCountryMarkup, listOfCountries, refs } from './js/createMarkup';

const DEBOUNCE_DELAY = 300;

refs.inputRef.addEventListener('input', debounce(getCountryName, DEBOUNCE_DELAY))

function getCountryName(e) {
    const name = e.target.value.trim();
    clearContainer()
    if (name === '') {
        return;
    }
    fetchCountries(name)
        .then(data => {
            if (data === undefined) {
                return;
          }
            checkNumbersOfCountry(data);
    })
}

function checkNumbersOfCountry(data) {
     clearContainer();  
    if (data.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    } else if ((data.length > 1)) {
        listOfCountries(data);
    }else {
        oneCountryMarkup(data);
    }
}

function clearContainer() {
    refs.countryListContainer.innerHTML = '';
    refs.countryInfoContainer.innerHTML = '';
}