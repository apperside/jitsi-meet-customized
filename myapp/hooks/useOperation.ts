import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux";
import { AppThunk } from "@redux";

/**
 * Hook used to fire an async thunk action
 * it provides loading and error state
 * 
 * TODO: add type inferring
 */
export function useOperation<T, Fn extends (...args: any[]) => AppThunk<Promise<T>>>(
  fn: Fn,
) {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const execute = async (...params: Parameters<Fn>) => {
    setLoading(true);
    console.log("set loading true");
    try {
      const result = await dispatch(fn(...params));
      console.log("set loading false");
      setLoading(false);
      return result;
    } catch (err) {
      console.error("sideEfect execution error", err);
      setError(err);
      setLoading(false);
      throw (error);
    }
  };
  return { loading, execute };
}