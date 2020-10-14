import { makeObservable, observable, computed, action } from 'mobx';

class Cart {
  constructor(rootStore) {
    makeObservable(this)
    this.rootStore = this.rootStore
  }

  @observable products = []

  @computed get productsDetailed() {
    return this.products.map(({ id, cnt }) => {
      const product = this.rootStore.products.getById(id)
      return { ...product, cnt: cnt }
    })
  }

  @computed get inCart() {
    return (id) => this.products.some(product => product.id === id)
  }

  @computed get total() {
    return this.productsDetailed.reduce((t, pr) => t + pr.price * pr.current, 0);
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

export default new Cart();
