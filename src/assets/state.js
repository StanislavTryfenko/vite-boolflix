import { reactive } from "vue";
import { translate } from '../assets/js_utility/languageToNationConverter.js'


export const state = reactive({
    searchBarText: '',
    filmList: [],
    seriesList: [],

    translatedFlag(language) {
        return translate(language);
    },

    StarRating(vote) {
        //riciclato il codice dell'esercizio debudding di adriano e modificato
        let ratingStars = '';

        //in this way i will always have a round at 0.5 positive as asked
        const rating = Math.ceil(vote * 2) / 4;

        for (let i = 1; i <= rating; i++) {
            ratingStars += '<i class="fa-solid fa-star"></i>';
        }
        if (rating - parseInt(rating) > 0.5) {
            ratingStars += '<i class="fa-regular fa-star-half-stroke"></i>';
        }
        for (let i = rating; i < 4.75; i++) {
            ratingStars += '<i class="fa-regular fa-star"></i>';
        }

        return ratingStars
    }
});