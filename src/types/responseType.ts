export enum Currencies {
  USD = 'USD',
  UAH = 'UAH',
  EUR = 'EUR',
}

export interface CurrencyResponse {
  date: string;
  info: {
    rate: number;
    timestamp: number;
  };
  query: {
    amount: number;
    from: keyof typeof Currencies;
  };
  result: number;
  success: boolean;
}
