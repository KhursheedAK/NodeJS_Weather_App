const createAccumulator = () => {
  let retentionValue = 0;
  return (a, b, callback) => {
    const sum = a + b;
    retentionValue = retentionValue + sum;
    callback(retentionValue);
  };
};

const initMate = createAccumulator();

initMate(5, 5, (sum) => {
  console.log(sum);
});

initMate(2, 1, (sum) => {
  console.log(sum);
});
