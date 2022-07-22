import { useEffect, useState } from 'react';
import currencyService from '../../service/currency.service';
import { Currencies, CurrencyResponse } from '../../types/responseType';
import './Header.module.css';

export const Header = () => {
  const [dollarRate, setDollarRate] = useState<number>();
  const [euroRate, setEuroRate] = useState<number>();

  const fetchCurrencies = async () => {
    const dollarRate = await currencyService.get<CurrencyResponse>(
      Currencies.UAH,
      Currencies.USD,
      1
    );
    setDollarRate(dollarRate.result);
    const euroRate = await currencyService.get<CurrencyResponse>(
      Currencies.UAH,
      Currencies.EUR,
      1
    );
    setEuroRate(euroRate.result);
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <div className='header'>
      <span>
        1 {Currencies.USD} - {dollarRate}
      </span>
      <span>
        1 {Currencies.EUR} - {euroRate}
      </span>
    </div>
  );
};
