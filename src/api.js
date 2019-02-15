import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "af2ce8289d6507a707f6aded8661ab9c",
    language: "ko-KR"
  }
});

export const movieAPI = {
  getNowPlaying: () => api.get("movie/now_playing"),
  getUpcoming: () => api.get("movie/upcoming"),
  getTopRated: () => api.get("movie/top_rated"),
  getPopular: () => api.get("movie/popular"),
  getDetails: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  getSearch: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const tvAPI = {
  getAiringToday: () => api.get("tv/airing_today"),
  getTopRated: () => api.get("tv/top_rated"),
  getPopular: () => api.get("tv/popular"),
  getDetails: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  getSearch: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};
