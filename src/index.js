import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchCountries } from './js/fetchCountries'
import { oneCountryMarkup, moreCountryMarkup, refs } from './js/createMarkup';

const DEBOUNCE_DELAY = 300;

refs.inputRef.addEventListener('input', debounce(getCountryName, DEBOUNCE_DELAY))

function getCountryName(e) {
    const name = e.target.value.trim()
    if (name === '') {
        clearContainer()
        return;
    } 
    fetchCountries(name)
        .then(data => {
         checkNumbersOfCountry(data)
        })
}       

function checkNumbersOfCountry(data) {
    if (data === undefined) {
        clearContainer()
        return;
    }
    if (data.length > 10) {
        clearContainer()
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
        return;
    } else {
        createMarkup(data)  
    }
}

function createMarkup(data) {
        clearContainer()
    if (data.length > 1) {
        moreCountryMarkup(data)
    } else {
        oneCountryMarkup(data)
    }     
}

function clearContainer() {
    refs.countryListContainer.innerHTML = '';
    refs.countryInfoContainer.innerHTML = '';
}


