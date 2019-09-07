import axios from "axios";

const api = (lang) => {
  const mapTolanguage = {
    kr: "ko-KR",
    en: "en-US"
  };

  return axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
      api_key: "af2ce8289d6507a707f6aded8661ab9c",
      language: mapTolanguage[lang]
    }
  });
};

export const movieAPI = {
  getNowPlaying: (lang) => api(lang).get("movie/now_playing"),
  getUpcoming: (lang) => api(lang).get("movie/upcoming"),
  getTopRated: (lang) => api(lang).get("movie/top_rated"),
  getPopular: (lang) => api(lang).get("movie/popular"),
  getDetails: (lang, id) =>
    api(lang).get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  getSearch: (lang, term) =>
    api(lang).get("search/movie", {
      params: {
        query: term
      }
    })
};

export const tvAPI = {
  getAiringToday: (lang) => api(lang).get("tv/airing_today"),
  getOnTheAir: (lang) => api(lang).get("tv/on_the_air"),
  getPopular: (lang) => api(lang).get("tv/popular"),
  getDetails: (lang, id) =>
    api(lang).get(`tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  getSearch: (lang, term) =>
    api(lang).get("search/tv", {
      params: {
        query: term
      }
    })
};
