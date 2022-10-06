function useStorage(key) {
  const data = localStorage.getItem(key) || '';

  function setLocalStorage(value) {
    localStorage.setItem(key, value);
  }

  return [data, setLocalStorage];
}

export default useStorage;
