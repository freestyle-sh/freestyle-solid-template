import { CloudState, useCloud } from "freestyle-sh";
import { createSignal, onMount } from "solid-js";
import { CounterCloudState } from "./counter-state";


export function Counter() {
  let counterState: CloudState<CounterCloudState>;
  onMount(() => {
    counterState = useCloud<typeof CounterCloudState>("Counter");

    counterState.getValue().then((newCount) => setCount(newCount));
  });

  const [count, setCount] = createSignal(0);

  return (
    <button
      class="increment"
      onClick={() => {
        counterState.increment().then((newCount) => setCount(newCount))
      }}
      type="button"
    >
      Clicks: {count()}
    </button>
  );
}
