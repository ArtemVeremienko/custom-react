import makeRequest from './helpers/makeRequest'

export const all = () => {
  return makeRequest('products/')
}
