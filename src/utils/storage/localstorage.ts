import { isJSON } from "../utils";

export const getLocalStorageItem = (key: string) => {
  const item = localStorage.getItem(key);
  if (!item) {
    return null;
  }
  return JSON.parse(item);
};

export const setLocalStorageItem = (key: string, value: any) => {
  const item = !isJSON(value) ? JSON.stringify(value) : value;
  localStorage.setItem(key, item);
};

export const removeLocalStorageItem = (key: string) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
