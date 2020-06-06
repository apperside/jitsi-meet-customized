import { useEffect, useState } from "react";
import { AsyncStorage } from "react-native";
import { LocalStorageKeys } from "@utils/AsyncStorageHelper";


export const useLocalStorage = <T>(key: LocalStorageKeys, isJson?: boolean) => {

  const [internalValue, setInternalValue] = useState<string | T | null>();
  const [isLoading, setIsLoading] = useState(true);
  async function getValue() {
    if (isJson) {
      let result = await AsyncStorage.getItem(key);
      if (result) {
        const data = JSON.parse(result) as T;
        setInternalValue(data);
        setIsLoading(false);
        return data;
      }
      return null;
    }
    else {
      const result = await AsyncStorage.getItem(key);
      setInternalValue(result);
      setIsLoading(false);
      return false;
    }
  }

  async function setValue(data: string | T) {
    setIsLoading(true);
    if (typeof data === "string") {
      await AsyncStorage.setItem(key, data).then(() => setIsLoading(false));
    }
    else {
      if (typeof data === "string") {
        const finalData = JSON.stringify(data);
        await AsyncStorage.setItem(key, finalData).then(() => setIsLoading(false));
      }
    }
    setInternalValue(data);
    return data;
  }

  async function clearValue() {
    setIsLoading(true);
    await AsyncStorage.removeItem(key).then(() => setIsLoading(false));;
    setInternalValue(null);
  }

  useEffect(() => {
    getValue();
  }, []);

  return { value: internalValue, setValue, clearValue, isLoading };

};
