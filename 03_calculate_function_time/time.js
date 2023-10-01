const sum = (a, b) => console.log(`sum of ${a} and ${b}: `, (a + b));
const multiply = (a, b) => console.log(`product of ${a} and ${b}: `, (a * b));

const measureTime = () => {
    console.time("sum()");
    sum(5, 1);
    console.timeEnd("sum()");

    console.time("multiply()");
    multiply(3, 2);
    console.timeEnd("multiply()");
}

measureTime();