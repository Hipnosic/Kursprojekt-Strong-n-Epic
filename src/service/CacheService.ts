function saveLocalValue<T>(ref: string, value: T) {
  localStorage.setItem(ref, JSON.stringify(value));
}

function getLocalValue(ref: string) {
  const value = localStorage.getItem(ref);
  if (value == null) throw new Error(`${ref} not found in local storage`);

  return JSON.parse(value);
}

function removeLocalValue(ref: string) {
  localStorage.removeItem(ref);

  return "You have logged out";
}

const cacheService = { saveLocalValue, getLocalValue, removeLocalValue };
export default cacheService;
