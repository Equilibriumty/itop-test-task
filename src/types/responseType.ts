export enum Currencies {
  USD = 'USD',
  UAH = 'UAH',
  EUR = 'EUR',
}

export interface CurrencyResponse {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Record<string, number>;
}
