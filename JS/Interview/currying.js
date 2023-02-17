const currying = (a) => (b) => b ? currying(a + b) : a;
currying(2)(3)(4)(5)();
