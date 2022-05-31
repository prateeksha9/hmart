import { FETCH_CURRENCY } from '../action/actionType';

// the function handles all states of posts

export default function currency(state = [], action) {
  switch (action.type) {
    case FETCH_CURRENCY:
      return action.currency;

    default:
      return state;
  }
}

// const array = state.filter(prod => prod.id !== action.id)
// return array

// spread operator: ...object
// this is used to copy the object (shallow copy)

// shallow copy:
// const obj={
//   name:"abc",
//   address:{
//     city:"xyz",
//     pincode:"12345"
//     }
//   }

// array.indexOf
//and change
// make new array and return

// deep copy: json.parse(json.stringify(obj))
