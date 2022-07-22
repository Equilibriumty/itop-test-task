export enum Currencies {
  USD = 'USD',
  UAH = 'UAH',
  EUR = 'EUR',
}

export type CurrencyResponse = {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Record<string, number>;
};

export type CurrencySigns = keyof typeof Currencies;
