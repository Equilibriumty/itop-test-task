import axios, { AxiosInstance } from 'axios';
export class CurrencyService {
  fetchingService: AxiosInstance;
  baseUrl: string;
  apiKey: string;

  constructor() {
    this.fetchingService = axios;
    this.baseUrl = process.env.REACT_APP_API_URL ?? '';
    this.apiKey = process.env.REACT_APP_API_KEY ?? '';
  }

  private getFullApiUrl(to: string, from: string, amount: string) {
    return `${this.baseUrl}to=${to}&from=${from}&amount=${amount}`;
  }

  async get<T>(to: string, from: string, amount: number): Promise<T> {
    const res = await this.fetchingService.get<T>(
      this.getFullApiUrl(to, from, String(amount)),
      {
        headers: { apikey: this.apiKey },
      }
    );

    return res.data;
  }
}
const currencyService = new CurrencyService();
export default currencyService;
