class LocalStorageAdapter {
    set(key, value) {
      if (value) localStorage.setItem(key, JSON.stringify(value));
      else localStorage.removeItem(key);
    }
  
    get(key) {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null;
    }
  }
  
  module.exports = LocalStorageAdapter;
  