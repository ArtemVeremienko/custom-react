import { makeObservable, observable, action, computed } from 'mobx';

class Order {
  constructor() {
    makeObservable(this)
  }

  @observable formData = {
    email: {
      label: 'Email',
      value: '',
      type: 'email',
    },
    phone: {
      label: 'Phone',
      value: '',
      type: 'tel',
    },
    name: {
      label: 'Your name',
      value: '',
      type: 'text',
    },
  }

  @action changeField(key, newValue) {
    this.formData[key].value = newValue;
  }

  @computed get values() {
    const values = {};
    for (let key in this.formData) {
      values[key] = this.formData[key].value
    }
    console.log(values)
    return values
  }
}


export default new Order();