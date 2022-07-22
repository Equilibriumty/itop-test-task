import { useEffect, useState } from 'react';
import { currencyService } from '../service/currency.service';
import { CurrencyResponse } from '../types/responseType';

export const useCurrencyRates = () => {
  const [data, setData] = useState<{ [x: string]: number }>({});
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await currencyService.get<CurrencyResponse>();
        setData(response.rates);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, error, loading };
};
