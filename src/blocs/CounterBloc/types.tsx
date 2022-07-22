export interface BlocInterface {
  ComponentUI: React.FunctionComponent<ComponentUIInterface>
}

export interface ComponentUIInterface {
  counter: number,
  increment: () => void,
  decrement: () => void,
}