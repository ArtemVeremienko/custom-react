import { makeObservable, observable, computed, action } from 'mobx';

class Order {
  constructor(rootStore) {
    makeObservable(this)
    this.rootStore = rootStore;
  }

  @observable formData = {
    name: {
      value: '',
      label: 'Name',
      validator: val => /^[A-z ]{2,}$/.test(val),
      errorText: 'Латинские символы, не менее двух',
      valid: null
    },
    phone: {
      value: '',
      label: 'Phone',
      validator: val => /^[0-9]{7,15}$/.test(val),
      errorText: 'От 7 до 15 цифр',
      valid: null
    },
    email: {
      value: '',
      label: 'Email',
      validator: val => /^.+@.+$/.test(val),
      errorText: 'Нет собаки',
      valid: null
    }
  }

  @computed get formValid() {
    return Object.values(this.formData).every(field => field.valid);
  }

  @computed get data() {
    let data = {};

    for (let name in this.formData) {
      data[name] = this.formData[name].value;
    }

    return data;
  }

  @action change(key, value) {
    let field = this.formData[key];
    field.value = value;
    field.valid = field.validator(field.value);
  }
}

export default new Order();
