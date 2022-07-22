import { Currencies } from '../../types/responseType';
import './CurrencySelection.module.css';

interface CurrencySelectionProps {
  selectedCurrency: keyof typeof Currencies;
  currencies: string[];
  amount: number;
  onAmountChange: (e: any) => void;
  onSelectChange: (e: any) => void;
}

export const CurrencySelection = ({
  selectedCurrency,
  currencies,
  amount,
  onAmountChange,
  onSelectChange,
}: CurrencySelectionProps) => {
  const handleSelectChange = (e: any) => {
    onSelectChange(e.target.value);
  };

  const handleAmountChange = (e: any) => {
    onAmountChange(e.target.value);
  };

  return (
    <div className='content-currency'>
      <input type='text' value={amount} onChange={handleAmountChange} />
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