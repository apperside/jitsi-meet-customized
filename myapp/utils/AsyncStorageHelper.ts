import AsyncStorage from "@react-native-community/async-storage";

/**
 * Wrap local storage implementation in order to:
 * - provide a better interface (typed key-value pair for multiget-multiset instead of array of array)
 * - easily allow to switch to any kind of local storage implementation
 */
export type LocalStorageKeys =
  | "userToken"
  | "spotifyToken"
  | "isAnonymous"
type LocalStorageKeyValuePair = { [key in Partial<LocalStorageKeys>]?: string };
export const AsyncStorageHelper = {
  setItem: (key: LocalStorageKeys, data: string) => {
    return AsyncStorage.setItem(key, data);
  },
  getItem: (key: LocalStorageKeys) => {
    return AsyncStorage.getItem(key);
  },
  multiSet: (data: LocalStorageKeyValuePair) => {
    const params = Object.entries(data).map(entry => {
      return [entry[0], entry[1]];
    }) as string[][];
    return AsyncStorage.multiSet(params);
  },
  multiGet: (
    ...keys: LocalStorageKeys[]
  ): Promise<LocalStorageKeyValuePair> => {
    return AsyncStorage.multiGet(keys).then(result => {
      const finalResult: LocalStorageKeyValuePair = {};
      result.forEach(pair => {
        finalResult[pair[0] as LocalStorageKeys] = pair[1] as string;
      });
      return finalResult;
    });
  },
  multiRemove: (...keys: LocalStorageKeys[]): Promise<void> => {
    return AsyncStorage.multiRemove([...keys]);
  },
  removeItem: (key: LocalStorageKeys): Promise<void> => {
    return AsyncStorage.removeItem(key);
  },
};
