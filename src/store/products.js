import { makeObservable, observable, computed, action } from 'mobx'

export default class {
  constructor(rootStore) {
    makeObservable(this)
    this.rootStore = rootStore
  }

  @observable items = getProducts()

  @computed get productsMap() {
    return this.items.reduce((obj, { id }, i) => {
      obj[id] = i
      return obj
    }, {})
  }

  getById(id) {
    const index = this.productsMap[id]
    if (index === undefined) return null
    return this.items[index]
  }
}





// server api
function getProducts() {
  return [
    {
      id: 100,
      title: 'Ipnone 200',
      price: 12000,
      rest: 10,
    },
    {
      id: 101,
      title: 'Samsung AAZ8',
      price: 22000,
      rest: 5,
    },
    {
      id: 103,
      title: 'Nokia 3310',
      price: 5000,
      rest: 2,
    },
    {
      id: 105,
      title: 'Huawei ZZ',
      price: 15000,
      rest: 8,
    }
  ];
}
