import { FETCH_CURRENCY } from './actionType';
// import { APIurls } from '../helpers/url';
import { getFormBody } from '../helpers/utils';

// define all the required actions to manage the cart state
export default function fetchCurrency(perPage, page) {
  return (dispatch) => {
    fetch(`https://api.coincap.io/v2/assets?per_page=${perPage}&page=${page}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updateCurrency(data.data));
      });
  };
}

export function updateCurrency(currency) {
  return {
    type: FETCH_CURRENCY,
    currency,
  };
}
