import { CounterBloc } from "../../blocs/CounterBloc";
import { ComponentUI } from "./ComponentUI";

export const CounterRed = () => {
  return <CounterBloc ComponentUI={ComponentUI}/>
}