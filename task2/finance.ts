export namespace Finance {

    export class LoanCalculator {
        static calculateMonthlyPayment(principal: number, annualRate: number, months: number): number {
            const monthlyRate = annualRate / 100 / 12;
            const numerator = monthlyRate * Math.pow(1 + monthlyRate, months);
            const denominator = Math.pow(1 + monthlyRate, months) - 1;
            return principal * (numerator / denominator);
          }
    }
    export class TaxCalculator {
        static calculateTax(income: number, taxRate: number): number {
            return income * (taxRate / 100);
          }
    }
}