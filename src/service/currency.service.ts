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

  private getFullApiUrl() {
    return `${this.baseUrl}`;
  }

  async get<T>(): Promise<T> {
    const response = await this.fetchingService.get<T>(this.getFullApiUrl(), {
      headers: { apikey: this.apiKey },
    });

    return response.data;
  }
}
export const currencyService = new CurrencyService();
