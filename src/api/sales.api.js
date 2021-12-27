import { API } from "../config/config";

export const createSales = (a) => {
  return fetch(`${API}/sales/create`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    mode: 'cors',
    body: JSON.stringify(a)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};