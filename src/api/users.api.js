import { API } from "../config/config";

export const deleteOneUser = (e) => {
  return fetch(`${API}/user/delete`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    mode: 'cors',
    body: JSON.stringify(e)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};