/**
 * saveLocalValue is a function that makes the data to json string then saves data in local storage
 * @param ref is to have a ref to the data it saved
 * @param value is the data its saving
 */

function saveLocalValue<T>(ref: string, value: T) {
  localStorage.setItem(ref, JSON.stringify(value));
}

/**
 * getLocalValue gets data from local with ref and change the data to a string
 * @param ref is a ref to where the data is saves in local storage
 * @returns a format json string into an object
 */

function getLocalValue(ref: string) {
  const value = localStorage.getItem(ref);
  if (value == null) throw new Error(`${ref} not found in local storage`);

  

  return JSON.parse(value);
}

/**
 * removeLocalValue removes the data from local storage with the ref
 * @param ref is a ref to where the data is saves in local storage
 * @returns a string text "You have logged out"
 */

function removeLocalValue(ref: string) {
  localStorage.removeItem(ref);

  return "You have logged out";
}

const cacheService = { saveLocalValue, getLocalValue, removeLocalValue };
export default cacheService;
