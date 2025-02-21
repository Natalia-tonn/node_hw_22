import { generateFibonacci, generatePrimeNumbers } from './sequenceUtils';

const fibonacciLimit = 100;
const primeLimit = 50;

const fibonacciSequence = generateFibonacci(fibonacciLimit);
console.log(`Числа Фибоначчи до ${fibonacciLimit}:`, fibonacciSequence);

const primeNumbers = generatePrimeNumbers(primeLimit);
console.log(`Простые числа до ${primeLimit}:`, primeNumbers);
