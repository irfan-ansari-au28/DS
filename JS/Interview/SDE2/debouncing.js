const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

const fn = (a, b) => {
  console.log(a, b, "c");
};

const debouncer = debounce(fn, 3000);
debouncer("a", "b");
