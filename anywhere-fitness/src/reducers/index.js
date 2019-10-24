import {
    GET_DATA_START,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE,
    POST_DATA_START,
    POST_DATA_SUCCESS,
    POST_DATA_FAILURE,
    DELETE_DATA_START,
    DELETE_DATA_SUCCESS,
    DELETE_DATA_FAILURE
  } from "../actions/index";
  
  const initialState = {
      data: [],
      isFetching: false,
      error: ''
  };
  
  export const reducer = (state = initialState, action) => {
      switch (action.type) {
          case GET_DATA_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case GET_DATA_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.payload
        };
      case GET_DATA_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: `Unable to load your friend's list at this time: ${action.payload}`
        };
      case POST_DATA_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case POST_DATA_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.payload
        };
      case POST_DATA_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: `Unable to post to your friend's list at this time: ${action.payload}`
        };
      case DELETE_DATA_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case DELETE_DATA_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.payload
        };
      case DELETE_DATA_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: `Unable to delete from your friend's list at this time: ${action.payload}`
        };
      default:
        return state;
    }
  };