import { ComponentUIInterface } from "../../blocs/CounterBloc/types"
import './styles.css'

export const ComponentUI = ({
  counter,
  decrement,
  increment,
}: ComponentUIInterface) => {

  return <div className="red">
    <h1>Ai dento: {counter}</h1>

    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
}