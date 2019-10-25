export let data =
[{
    name:'Hot Yoga',
    duration:'30 mins',
    type:'Yoga',
    intensity: 'Intermediate'
},{
    name:'Functional Fitness',
    duration:'60 mins',
    type:'Pilates',
    intensity:'Advanced'
},{
    name:'Conditioning',
    duration:'45 mins',
    type:'Cardio',
    intensity:'Beginner'
}]

export const reducer = (state, action) => {
  switch (action.type) {
      case "ADD_ITEM":
          return [
              ...state, action.payload 
          ];
      case "TOGGLE_COMPLETED":
          return state.map(data => {
              if (data.id === action.payload) {
                  return {...data, completed: !data.completed};
              }
              return data
          });
      case "CLEAR":
          return state.filter(data => !data.completed)
      default:
          return state;
  }
};


// import {
//     GET_DATA_START,
//     GET_DATA_SUCCESS,
//     GET_DATA_FAILURE,
//     POST_DATA_START,
//     POST_DATA_SUCCESS,
//     POST_DATA_FAILURE,
//     DELETE_DATA_START,
//     DELETE_DATA_SUCCESS,
//     DELETE_DATA_FAILURE
//   } from "../actions/index";
  
//   const initialState = {
//       data: [],
//       isFetching: false,
//       error: ''
//   };
  
//   export const reducer = (state = initialState, action) => {
//       switch (action.type) {
//           case GET_DATA_START:
//         return {
//           ...state,
//           isFetching: true,
//           error: ""
//         };
//       case GET_DATA_SUCCESS:
//         return {
//           ...state,
//           isFetching: false,
//           data: action.payload.data
//         };
//       case GET_DATA_FAILURE:
//         return {
//           ...state,
//           isFetching: false,
//           error: ` ${action.payload}`
//         };
//       case POST_DATA_START:
//         return {
//           ...state,
//           isFetching: true,
//           error: ""
//         };
//       case POST_DATA_SUCCESS:
//         return {
//           ...state,
//           isFetching: false,
//           data: action.payload
//         };
//       case POST_DATA_FAILURE:
//         return {
//           ...state,
//           isFetching: false,
//           error: ` ${action.payload}`
//         };
//       case DELETE_DATA_START:
//         return {
//           ...state,
//           isFetching: true,
//           error: ""
//         };
//       case DELETE_DATA_SUCCESS:
//         return {
//           ...state,
//           isFetching: false,
//           data: action.payload
//         };
//       case DELETE_DATA_FAILURE:
//         return {
//           ...state,
//           isFetching: false,
//           error: `: ${action.payload}`
//         };
//       default:
//         return state;
//     }
//   };


