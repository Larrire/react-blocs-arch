import { ComponentUIInterface } from "../../blocs/CounterBloc/types"

export const ComponentUI = ({
  counter,
  decrement,
  increment
}: ComponentUIInterface) => {

  return <>
    <h1>Counter: {counter}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </>
}