const baseUrl = 'https://auth.nomoreparties.co';

const checkResponse = (response) =>
  response.ok ?
    response.json()
    : Promise.reject(new Error(`Ошибка ${response.status}: ${response.statusText}`));

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

export const register = ({ email, password }) => {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      email,
      password
    }),
  })
  .then(res => checkResponse(res));
}

export const authorize = ({ email, password }) => {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      email,
      password
    })
  })
  .then(res => checkResponse(res));
}

export const getContent = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      ...headers,
      "Authorization" : `Bearer ${token}`,
    },
  })
  .then(res => checkResponse(res));
}

