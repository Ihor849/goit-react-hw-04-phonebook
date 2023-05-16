import { useState, useEffect } from 'react';

export default function  useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(()=> JSON.parse(window.localStorage.getItem(key)) ?? defaultValue)
    // return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
    if(window.localStorage.getItem(key)!==JSON.stringify(state)) {
      setState(JSON.parse(window.localStorage.getItem(key)))
    }
  }, [key, state]);

  return [state, setState];
}
