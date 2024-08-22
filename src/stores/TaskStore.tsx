import { observable } from 'mobx';

const store = observable({
  checked: false,
  checkedChange() {
    this.checked = !this.checked;
  },
});

export default store;
