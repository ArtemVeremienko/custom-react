import { makeObservable, observable, computed, action } from 'mobx';

export default class {
  constructor(rootStore) {
    makeObservable(this)
    this.rootStore = rootStore
  }

  @observable products = []

  @computed get productsDetailed() {
    return this.products.map(({ id, cnt }) => {
      const product = this.rootStore.products.getById(id)
      return { ...product, cnt }
    })
  }

  @computed get inCart() {
    return (id) => this.products.some(product => product.id === id)
  }

  @computed get total() {
    return this.productsDetailed.reduce((t, { price, cnt }) => t + price * cnt, 0);
  }

  @computed get count() {
    return this.products.length;
  }

  @action add(id) {
    this.products.push({ id, cnt: 1 })
  }

  @action change(id, cnt) {
    const index = this.products.findIndex(pr => pr.id === id)
    if (index !== -1) this.products[index].cnt = cnt
  }

  @action remove(id) {
    const index = this.products.findIndex(pr => pr.id === id)
    if (index !== -1) this.products.splice(index, 1);
  }
}


