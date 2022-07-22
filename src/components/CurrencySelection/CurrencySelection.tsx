import React from 'react';
import { CurrencySigns } from '../../types/responseType';
import styles from './CurrencySelection.module.css';

interface CurrencySelectionProps {
  selectedCurrency: CurrencySigns;
  currencies: string[];
  amount: number;
  onAmountChange: (e: number) => void;
  onSelectChange: (e: any) => void;
}

export const CurrencySelection = ({
  selectedCurrency,
  currencies,
  amount,
  onAmountChange,
  onSelectChange,
}: CurrencySelectionProps) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectChange(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onAmountChange(Number(e.target.value));
  };

  return (
    <div className={styles.contentCurrency}>
      <input
        type='number'
        min='0'
        value={amount}
        onChange={handleAmountChange}
      />
      <select value={selectedCurrency} onChange={handleSelectChange}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};
