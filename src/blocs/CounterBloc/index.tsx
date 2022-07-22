import { useState } from 'react';
import { BlocInterface } from './types';

export const CounterBloc = ({ ComponentUI }:BlocInterface) => {
  
  const [counter, setCounter] = useState(0)
  const [alert, setAlert] = useState(false)

  function increment(){
    setCounter(counter + 5)
  }

  function decrement(){
    setCounter(counter - 1)
  }

  function setAlert2(){
    setAlert(!alert)
  }

  return <ComponentUI {...{counter, increment, decrement, alert, setAlert2}} />
}