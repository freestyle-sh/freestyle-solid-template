import { cloudstate } from "freestyle-sh";

@cloudstate
export class CounterCloudState {
  static id = "Counter";

  value = 0;

  increment() {
    return ++this.value;
  }

  decrement() {
    return --this.value;
  }

  getValue() {
    return this.value;
  }
}
