import { CounterBloc } from "../../blocs/CounterBloc";
import { ComponentUI } from "./ComponentUI";

export const Counter = () => {
  return <CounterBloc ComponentUI={ComponentUI}/>
}