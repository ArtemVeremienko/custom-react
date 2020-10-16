import makeRequest from './helpers/makeRequest'

export const load = (token) => {
  const url = 'cart/load.php'

  if (token !== null) {
    url += `?token=${token}`
  }

  return makeRequest(url)
}

export const add = (token, id) => {
  return makeRequest(`cart/add.php?token=${token}&id=${id}`)
}

export const remove = (token, id) => {
  return makeRequest(`cart/remove.php?token=${token}&id=${id}`)
}


