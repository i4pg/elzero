class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  stop() {
    return "Car Is Stopped"
  }
  run() {
    return "Car Is Running Now"
  }
}

let carOne = new Car("MG", 2022, 420_000)
let carTwo = new Car("Patrol", 2022, 300_000)
let carThree = new Car("Caprice", 2014, 180_000)

console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price is ${carOne.p}`)
console.log(carOne.run())

// Needed Output

"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"
