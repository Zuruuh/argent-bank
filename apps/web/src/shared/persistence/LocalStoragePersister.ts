import type { PersisterInterface } from './PersisterInterface.d';

export const LocalStoragePersister: PersisterInterface = {
  has(key) {
    return Boolean(localStorage.getItem(key));
  },

  get(key, schema) {
    return schema.safeParse(localStorage.getItem(key));
  },

  clear() {
    localStorage.clear();
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  set(key, value) {
    localStorage.setItem(key, value);
  },
};
