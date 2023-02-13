const t0 = performance.now();

for (let index = 0; index < 99999; index++) {
  console.log(index++)
}

const t1 = performance.now();

console.log(`"Loop Took ${(t1 - t0).toFixed()} Milliseconds.`);
