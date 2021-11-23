import { action, observable } from "mobx";

class Store {
  @observable demoTitle = "DemoTitle";

  @action
  setDemoTitle(demoTitle) {
    this.demoTitle = demoTitle;
  }
}

export default Store;
