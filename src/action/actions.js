import { INCREMENT, DECREMENT } from './types';

export const increaseCounter = () => {
  return {
    type: INCREMENT, // ~ NAME
    payload: { like: 'Buy diamond', name: 'lppduy' },
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};
