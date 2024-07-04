// import { Suspense, createResource, createSignal } from "solid-js";
import "./app.css";
import  { Counter } from "./counter";

export default function App() {
  

  return (
    <main>
      <h1>Hello world!</h1>
        <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps. and visit <a href="https://freestyle.sh" target="_blank">freestyle.sh</a> to learn how to build Freestyle apps.
      </p>
    </main>
  );
}
