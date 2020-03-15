import * as types from "../../consts/actionTypes";
// import { get } from "lodash";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_MOVIE_START:
      return { ...state, isLoading: true };
    case types.SEARCH_MOVIE_ERROR:
      return { ...state, isLoading: false, movies: null };
    case types.SEARCH_MOVIE_COMPLETE:
      return { ...state, isLoading: false, movieResults: action.results.data };
    case types.SEARCH_MOVIE_BY_ID_START:
      return { ...state, isLoading: true, movieResult: null };
    case types.SEARCH_MOVIE_BY_ID_ERROR:
      return { ...state, isLoading: false, movieResult: null };
    case types.SEARCH_MOVIE_BY_ID_COMPLETE:
      console.log(action);
      return { ...state, isLoading: false, movieResult: action.movie.data };
    default:
      return { ...state };
  }
}
