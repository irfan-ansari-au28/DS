// It's a higher order function
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let cacheKey = "";
    cacheKey = args.map((n) => cacheKey + n.toString()).join("");
    if (cacheKey in cache) {
      console.log("from cache", cache[cacheKey]);
      return cache[cacheKey];
    } else {
      let result = fn(...args);
      cache[cacheKey] = result;
      console.log(cache);
      return result;
    }
  };
};

const add = (a, b) => a + b;

const memoizeAdd = memoize(add);
memoizeAdd(2, 3);
memoizeAdd(1, 2);
memoizeAdd(2, 1);
memoizeAdd(4, 3);
memoizeAdd(1, 2);
memoizeAdd(2, 1);
