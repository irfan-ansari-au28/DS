const debounce = (fn, delay) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
};

const fn = (delay) => {
  setTimeout(() => {
    console.log(Date.now()), 1000;
  });
};

const debouncer = debounce(fn(2000));
debouncer();
