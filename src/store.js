import {reactive} from 'vue';

export const store = reactive ({

    // LANGUAGE AND FLAGS SETTINGS

    flagAddress: "https://flagcdn.com/48x36/",

    imageAddress: "https://image.tmdb.org/t/p/w342",

    languages: "",


    // MOVIES 
    movies: [],

    inputValue: "",

    firstAPIcall: "https://api.themoviedb.org/3/discover/movie?api_key=0cc241ff8bf0b6d1933056af82109384&query=&language=it-IT",

    APIcall: "https://api.themoviedb.org/3/search/movie?api_key=0cc241ff8bf0b6d1933056af82109384",

    APIquery: "&query=",




    // SERIES
    series: [],

    seriesInput: "",

    secondaAPIcall: "https://api.themoviedb.org/3/discover/tv?api_key=0cc241ff8bf0b6d1933056af82109384&query=&language=it-IT&page=3",

    APIcall2: "https://api.themoviedb.org/3/search/tv?api_key=0cc241ff8bf0b6d1933056af82109384",



    moviesStarsVote: "",
    seriesStarsVote: "",

    showJumbo: true,

    MoviesResultsNumber: "",
    SeriesResultsNumber: "",




    // CAST
    castCallFirstPart: "https://api.themoviedb.org/3/movie/",
    castCallSecondPart: "/credits?api_key=0cc241ff8bf0b6d1933056af82109384&query=&language=it-IT",

    moviesID: "",
    movieCast: "",

    castResult: "",

    finalResult: "",


})