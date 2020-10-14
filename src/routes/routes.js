import Cart from '~p/cart'
import Order from '~p/order'
import Result from '~p/result'
import Page404 from '~p/error404'
import ProductList from '~p/products/list'
import ProductItem from '~p/products/item'

const routes = [
  {
    name: 'home',
    url: '/',
    component: ProductList,
    exact: true,
  },
  {
    name: 'product',
    url: '/product/:id',
    component: ProductItem,
    exact: true,
  },
  {
    name: 'cart',
    url: '/cart',
    component: Cart,
    exact: true,
  },
  {
    name: 'order',
    url: '/order',
    component: Order,
    exact: true,
  },
  {
    name: 'result',
    url: '/done',
    component: Result,
    exact: true,
  },
  {
    url: '**',
    component: Page404,
  },
]

const routesMap = routes.reduce((obj, { name, url }) => {
  if (name) obj[name] = url
  return obj
}, {})


const urlBuilder = (name, params) => {
  if (!routesMap.hasOwnProperty(name)) return null

  let url = routesMap[name] // news/:id

  for (let key in params) {
    url = url.replace(':' + key, params[key])
  }

  return url
}

export default routes
export { routesMap, urlBuilder }
