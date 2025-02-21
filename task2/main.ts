
import { Finance } from './finance';

const principal = 100000
const annualRate = 15 
const months = 24

const monthlyPayment = Finance.LoanCalculator.calculateMonthlyPayment(principal, annualRate, months);
console.log(`Ежемесячный платеж по кредиту: ${monthlyPayment.toFixed(2)} рублей`);

const income = 500000
const taxRate = 13

const tax = Finance.TaxCalculator.calculateTax(income, taxRate);
console.log(`Сумма налога на доход: ${tax.toFixed(2)} рублей`);