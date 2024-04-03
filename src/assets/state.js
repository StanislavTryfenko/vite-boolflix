import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
    films: [],
    getFilms() {
        axios.get("https://api.themoviedb.org/3/movie/550?api_key=3c0747819cb9c3f045fb3c101a55e6e1")
            .then(response => {
                this.films = response.data;
                console.log(response);
            })
    }
});
