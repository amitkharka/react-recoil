import { useState } from "react";
import { useSetRecoilState } from 'recoil';
import { todoSelector } from '../store';

export const useTodo = () => {
  const [error, setError] = useState();
  const setTodosState = useSetRecoilState(todoSelector);

  const fetchResults = async () => {
    try {
      const responseJSON = await fetch('https://api.github.com/users/amitkharka/repos');
      const response = await responseJSON.json();
      setTimeout(() => {
        setTodosState({
          type: 'SAMPLE_FETCH', payload: response
        });
      }, 2500);

    } catch (error) {
      setError(error);
    }
  }

  return { error, fetchResults };
};
