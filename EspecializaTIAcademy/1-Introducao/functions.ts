function add(a: number, b: number): number {
  return a + b;
}

const add1 = (a: number, b: number): number => a + b;

const addWithOptionTax = (a: number, b: number, tax?: number): number => {
  if (typeof tax !== "undefined") {
    return a + b - tax;
  } else {
    return a + b;
  }
};

const applyDiscount = (price: number, discount: number = 5): number => {
  return price - price * (discount / 100);
};

const calcTotal = (name: string, ...numbers: number[]): number => {
  let total = 0;

  numbers.forEach((num) => {
    return (total += num);
  });
  return total;
};

calcTotal("opa", 1, 2, 3, 67, 87);
